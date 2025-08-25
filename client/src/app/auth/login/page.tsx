"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});

  const validate = () => {
    const next: { email?: string; password?: string } = {};
    if (!email) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email";
    if (!password) next.password = "Password is required";
    else if (password.length < 6) next.password = "At least 6 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: Hook to API or auth provider
    alert("Logged in (demo)");
  };
  return (
    <main
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{
        backgroundImage: "url(/images/space-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Login page"
    >
      {/* overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(24,0,48,0.82) 45%, rgba(18,0,34,0.78) 100%)",
        }}
      />

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6 col-xl-5">
            <div
              className="p-4 p-lg-5 rounded-4 mx-auto shadow-lg"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <div className="text-center mb-4">
                <h1 className="fw-bold mb-1" style={{ color: "#fff" }}>Login</h1>
              </div>

              <form className="text-white-50" onSubmit={onSubmit} noValidate>
                {/* Email */}
                <div className="mb-4">
                  <label className="form-label text-white">Email</label>
                  <input
                    type="email"
                    className={`form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0 ${errors.email ? "is-invalid" : ""}`}
                    placeholder=""
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.6)" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label text-white">Password</label>
                  <input
                    type="password"
                    className={`form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0 ${errors.password ? "is-invalid" : ""}`}
                    placeholder=""
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.6)" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                </div>

                {/* Remember + Forgot */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rememberCheck" />
                    <label className="form-check-label" htmlFor="rememberCheck">
                      Remember Me
                    </label>
                  </div>
                  <Link href="/auth/forgot" className="text-decoration-none fw-semibold" style={{ color: "#e5d4ff" }}>
                    Forget Password
                  </Link>
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-light text-dark fw-semibold py-2"
                    style={{ borderRadius: 9999 }}
                  >
                    Log in
                  </button>
                </div>

                {/* Register */}
                <div className="text-center mt-4">
                  <span className="text-white-50">Don't have an account </span>
                  <Link href="/auth/register" className="fw-semibold text-decoration-none" style={{ color: "#e5d4ff" }}>
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
