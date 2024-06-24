import Button from "@/app/_components/Button";
import TextField from "@/app/_components/TextField";
import RadioSelect from "@/app/_components/RadioSelect";
import Numbers from "@/app/_components/Numbers";

export default function Home() {
  return (
      <div>
          <h1>Hello world!</h1>
          <h2>Hello world</h2>
          <h3>Hello world</h3>
          <h4>Hello world</h4>
          <h5>Hello world</h5>
          <h6>Hello world</h6>
          <p className="overline-element">Hello world</p>
          <p className="subtitle-element">Hello world</p>
          <Button type="primary">See product</Button>
          <Button type="secondary">See product</Button>
          <Button type="tertiary">Shop</Button>
          <TextField label="Name" placeholder="Insert your name" error={true}/>
          <RadioSelect label={"e-Money"}/>
          <Numbers max={5}/>
      </div>
  );
}
