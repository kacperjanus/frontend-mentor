import Form from "@/app/_components/Form";

export const metadata = {
  title: "Multistep Form",
  description: "My solution to multistep form challenge by Frontend Mentor"
}

export default function Home() {
  return <div className="bg-magnolia md:bg-light-blue w-full h-screen items-center justify-center flex">
    <Form/>
  </div>
}
