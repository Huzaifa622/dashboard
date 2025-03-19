import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LogIn } from "lucide-react";
// import { data } from "react-router";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters " })
    .max(16),
});

type SchemaType = z.infer<typeof loginSchema>;

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SchemaType>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data:SchemaType) => {
console.log(data)
if(data.email == "admin@gmail.com"){

  localStorage.setItem("role" , "super-admin");

  window.location.href = "/super-admin";
return
}
if(data.email == "agency@gmail.com"){

  localStorage.setItem("role" , "agency");

  window.location.href = "/agency";
return
}

    
    // localStorage.setItem("role" , "agency")
  };
  return (
    <div className="bg-sidebar">
      <div className="flex justify-center w-screen h-screen items-center">
        <div className="p-5 border w-[35%] rounded-2xl">
          <div
            // style="animation: slideInFromLeft 1s ease-out;"
            className="w-full   rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
          >
            <h2
              //   style="animation: appear 2s ease-out;"
              className="text-center text-4xl font-extrabold text-sidebar-foreground"
            >
              Login
            </h2>
            {/* <p
            //   style="animation: appear 3s ease-out;"
              className="text-center text-gray-200"
            >
              Sign in to your account
            </p> */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-sidebar-border text-sidebar-foreground bg-transparent placeholder-transparent focus:outline-none focus:border-sidebar-accent"
                  {...register("email", { required: true })}
             
                  name="email"
                  type="email"
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sidebar-accent-foreground peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email address
                </label>
                {errors.email?.message && (
                  <p className="text-[#FF0000] mt-2 font-bold text-xs">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  placeholder="Password"
                  className="peer h-10 w-full border-b-2 border-sidebar-border text-sidebar-foreground bg-transparent placeholder-transparent focus:outline-none focus:border-sidebar-accent"
                  {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="password"
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sidebar-accent-foreground peer-focus:text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                {errors.password?.message && (
                  <p className="text-[#FF0000] mt-2 font-bold text-xs">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              {/* <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-200">
                  <input
                    className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                    type="checkbox"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a className="text-sm text-purple-200 hover:underline" href="#">
                  Forgot your password?
                </a>
              </div> */}
              <Button className="w-full py-2 px-4 " type="submit">
                <LogIn /> Sign In
              </Button>
            </form>
            {/* <div className="text-center text-gray-300">
              Don't have an account?
              <Link className="text-purple-300 hover:underline" to="#">
                Sign up
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
