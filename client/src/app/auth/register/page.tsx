"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirm?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!name) next.name = "Name is required";
    if (!email) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email";
    if (!password) next.password = "Password is required";
    else if (password.length < 6) next.password = "At least 6 characters";
    if (!confirm) next.confirm = "Confirm your password";
    else if (confirm !== password) next.confirm = "Passwords do not match";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Registered (demo)");
  };

  return (
    <main
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{
        backgroundImage: "url(/images/space-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Register page"
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(180deg, rgba(27, 0, 51, 0.75) 0%, rgba(18, 0, 34, 0.85) 100%)" }} />

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
                <h1 className="fw-bold mb-1" style={{ color: "#fff" }}>Register</h1>
              </div>

              <form className="text-white-50" onSubmit={onSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label text-white">Full Name</label>
                  <input
                    type="text"
                    className={`form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0 ${errors.name ? "is-invalid" : ""}`}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.6)" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label text-white">Email</label>
                  <input
                    type="email"
                    className={`form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0 ${errors.email ? "is-invalid" : ""}`}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.6)" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label text-white">Password</label>
                  <input
                    type="password"
                    className={`form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0 ${errors.password ? "is-invalid" : ""}`}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.6)" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                </div>

                <div className="mb-4">
                  <label className="form-label text-white">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0 ${errors.confirm ? "is-invalid" : ""}`}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.6)" }}
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                  {errors.confirm && <div className="invalid-feedback d-block">{errors.confirm}</div>}
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-light text-dark fw-semibold py-2" style={{ borderRadius: 9999 }}>
                    Create account
                  </button>
                </div>

                <div className="text-center mt-4">
                  <span className="text-white-50">Already have an account </span>
                  <Link href="/auth/login" className="fw-semibold text-decoration-none" style={{ color: "#e5d4ff" }}>
                    Log in
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
