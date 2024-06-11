import Form from "@/app/_components/Form";

export const metadata = {
  title: "Multistep Form",
  description: "My solution to multistep form challenge by Frontend Mentor"
}

export default function Home() {
  return <div className="bg-white md:bg-light-blue w-full h-screen md:items-center md:justify-center md:flex">
    <Form/>
  </div>
}
