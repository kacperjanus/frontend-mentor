import Button from "@/app/_components/Button";
import TextField from "@/app/_components/TextField";

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
  </div>
}
