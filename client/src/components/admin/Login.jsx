function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="text-center">
        <form>
          <img
            className="mb-1"
            src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            alt="Logo"
            width={72}
            height={72}
          />
          <h1 className="h3 mb-3 fw-normal">Sign In to Dashboard</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-3 my-3" type="submit">
            Sign in
          </button>
          <p className="mt-2 mb-3 text-body-secondary">
            Don't have an account to manage dashboard? <br /> Contact admin
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
