import {transporter} from '../config/nodemailerConfig.js'
import Admin from '../model/adminModel.js';
import bcrypt from 'bcryptjs'

let storedOtp = ''; 

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};


//handle OTP generation
export const handleSendOtp = (req, res) => {
  const { email } = req.body;
  if(!email){
    return res.status(400).json('Enter email first');
  }
  const otp = generateOTP();
  storedOtp = otp; 

  const mailOptions = {
    from: 'cmabdulkareem@gmail.com',
    to: email,
    subject: 'Approval request',
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error: ', error);
      return res.status(500).json('Error sending email');
    }
    console.log('Email sent: ', info.response);
    res.status(200).json('OTP sent successfully');
  });
};

//handle registration
export const handleRegister = async (req, res) => {
  const { email, password, otp } = req.body;

  if (!email || !password || !otp) {
    return res.status(400).send('Missing required fields');
  }

  if (otp !== storedOtp) {    
    return res.status(400).send('Invalid OTP');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({ email, password: hashedPassword });

    res.status(200).send('Registration successful');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal server error');
  }
};