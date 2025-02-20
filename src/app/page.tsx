import Link from "next/link";
import TitleText from "./components/atoms/titleText";
import { Button } from "./components/atoms/button";


export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <TitleText className='text-7xl'>
        Welcome to Radiodiagnosis
      </TitleText>
      <Link href="/landingPage">
        <Button variant={"secondary"} size={"lg"} className="mt-4">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
