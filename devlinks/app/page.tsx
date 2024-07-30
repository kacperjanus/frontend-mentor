import Button from "@/app/_components/Button";
import TextField from "@/app/_components/TextField";
import Tabs from "@/app/_components/Tabs";
import ImageUpload from "@/app/_components/ImageUpload";
import PreviewItem from "@/app/_components/PreviewItem";

export default function Home() {
  return <div>
    <div className="heading-m">devlinks</div>
    <div className="heading-s">devlinks</div>
    <div className="body-m">devlinks</div>
    <div className="body-s">devlinks</div>
    <Button variant="primary">Button</Button>
    <Button variant="primary" active={true}>Button</Button>
    <Button variant="primary" disabled={true}>Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="secondary" active={true}>Button</Button>
    <Button variant="secondary" disabled={true}>Button</Button>
    <TextField placeholder="Text Field Empty"/>
    <TextField error={true} placeholder="Text Field Empty" errorMessage="Please check again"/>
    <Tabs labels={["Active", "Default", "Hover"]}/>
    <div className="w-48 h-48"><ImageUpload/></div>
    <div className="flex flex-col gap-2">
      <PreviewItem service="Github" link="yt.com/me"/>
      <PreviewItem service="FrontendMentor" link="yt.com/me"/>
      <PreviewItem service="Twitter" link="yt.com/me"/>
      <PreviewItem service="LinkedIn" link="yt.com/me"/>
      <PreviewItem service="YouTube" link="yt.com/me"/>
      <PreviewItem service="Facebook" link="yt.com/me"/>
      <PreviewItem service="Twitch" link="yt.com/me"/>
      <PreviewItem service="Devto" link="yt.com/me"/>
      <PreviewItem service="Codewars" link="yt.com/me"/>
      <PreviewItem service="freeCodeCamp" link="yt.com/me"/>
      <PreviewItem service="GitLab" link="yt.com/me"/>
      <PreviewItem service="Hashnode" link="yt.com/me"/>
      <PreviewItem service="StackOverflow" link="yt.com/me"/>
    </div>
  </div>
}
