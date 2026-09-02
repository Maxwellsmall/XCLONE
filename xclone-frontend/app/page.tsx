import Image from "next/image";
import SignUp from "../app/auth/Signup";


export default function Home() {
  return (
  
   <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <SignUp />
    </main>

    
  );
}
