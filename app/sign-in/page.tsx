import Image from "next/image";
import SignInForm from "@/components/SignInForm";

const SignInPage = () => {
    return (
        <main className="flex min-h-screen items-center justify-center px-4 text-gray-400">
            <div className="w-full max-w-sm">
                <Image
                    src="/assets/img/logo.svg"
                    alt="Watchtwr logo"
                    width={140}
                    height={32}
                    className="mx-auto mb-10 h-10 w-auto"
                />
                <h1 className="mb-6 text-2xl font-semibold text-gray-100">Sign in</h1>
                <SignInForm />
                <p className="mt-6 text-center text-sm text-gray-500">
                    Demo login: do not enter a real password.
                </p>
            </div>
        </main>
    );
};

export default SignInPage;
