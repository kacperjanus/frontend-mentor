import Form from "@/app/_components/Form";

export const metadata = {
  title: "Multistep Form",
  description: "My solution to multistep form challenge by Frontend Mentor"
}

export default function Home() {
  return <div className="bg-magnolia md:bg-light-blue md:w-[51rem] lg:w-[59.8rem] xl:w-[69rem] md:p-2 xl:p-18 lg:p-10">
    <Form/>
  </div>
}
