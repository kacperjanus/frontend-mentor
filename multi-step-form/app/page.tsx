import Form from "@/app/_components/Form";
import {FormData} from '@/app/interfaces'

export const metadata = {
  title: "Multistep Form",
  description: "My solution to multistep form challenge by Frontend Mentor"
}

const formData: FormData = {
  "steps": [
    {
      "type": "textInput",
      "fields": [
        {
          "label": "Name",
          "regex": "name",
          "placeholder": "e.g. Stephen King"
        },
        {
          "label": "Email Address",
          "regex": "email",
          "placeholder": "e.g. stephenking@lorem.com"
        },
        {
          "label": "Phone Number",
          "regex": "phoneNumber",
          "placeholder": "e.g. +1 234 567 890"
        }
      ],
      "stepTitle": "Personal info",
      "stepDescription": "Please provide your name, email address, and phone number.",
      "sidebarText": "Your info"
    },
    {
      "type": "singleSelect",
      "fields": [
        {
          "image": "",
          "optionTitle": "Arcade",
          "optionDescription": "$9/mo"
        },
        {
          "image": "",
          "optionTitle": "Advanced",
          "optionDescription": "$12/mo"
        },
        {
          "image": "",
          "optionTitle": "Pro",
          "optionDescription": "$15/mo"
        }
      ],
      "stepTitle": "Select your plan",
      "stepDescription": "You have the option of monthly or yearly billing",
      "sidebarText": "Select plan"
    },
    {
      "type": "multipleSelect",
      "fields": [
        {
          "primary": "+$1/mo",
          "optionTitle": "Online services",
          "optionDescription": "Access to multiplayer games"
        },
        {
          "primary": "+$2/mo",
          "optionTitle": "Larger storage",
          "optionDescription": "Extra 1TB on cloud save"
        },
        {
          "primary": "+$3/mo",
          "optionTitle": "Customizable profile",
          "optionDescription": "Custom theme on your profile"
        }
      ],
      "stepTitle": "Pick add-ons",
      "stepDescription": "Add-ons help enhance your gaming experience",
      "sidebarText": "Add-ons"
    }
  ],
  "form_id": 456
}

export default function Home() {
  return <Form formData={formData}/>
}
