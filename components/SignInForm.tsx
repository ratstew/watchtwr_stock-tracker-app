'use client';

import { type FormEvent } from "react";
import { startDemoSession } from "@/lib/demo-session";

const SignInForm = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // The values are not validated, sent or stored
        startDemoSession();
        window.location.assign("/");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    inputMode="email"
                    autoComplete="off"
                    placeholder="you@example.com"
                    required
                    className="form-input w-full border"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    placeholder="Enter any password"
                    required
                    className="form-input w-full border"
                />
            </div>

            <button type="submit" className="yellow-btn w-full">Sign in</button>
        </form>
    );
};

export default SignInForm;
