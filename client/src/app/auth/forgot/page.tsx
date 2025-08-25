"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(undefined);
    if (!email) return setError("Email is required");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email");
    setSent(true);
  };

  return (
    <main
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{
        backgroundImage: "url(/images/bg-pattern1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Forgot password page"
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
                <h1 className="fw-bold mb-1" style={{ color: "#fff" }}>Forgot Password</h1>
                <p className="text-white-50 m-0">Enter your email to receive a reset link.</p>
              </div>

              {sent ? (
                <div className="alert alert-success" role="alert">
                  If an account exists for {email}, a reset link has been sent.
                </div>
              ) : (
                <form className="text-white-50" onSubmit={onSubmit} noValidate>
                  <div className="mb-4">
                    <label className="form-label text-white">Email</label>
                    <input
                      type="email"
                      className={`form-control bg-transparent text-white border-0 border-bottom rounded-0 px-0 ${error ? "is-invalid" : ""}`}
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.6)" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <div className="invalid-feedback d-block">{error}</div>}
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-light text-dark fw-semibold py-2" style={{ borderRadius: 9999 }}>
                      Send reset link
                    </button>
                  </div>

                  <div className="text-center mt-4">
                    <Link href="/auth/login" className="fw-semibold text-decoration-none" style={{ color: "#e5d4ff" }}>
                      Back to login
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
