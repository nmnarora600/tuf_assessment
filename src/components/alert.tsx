import { RocketIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertFun({heading, subHeading}:{heading:string, subHeading:string}) {
  return (
    <Alert>
      <RocketIcon className="h-6 w-6" />
      <AlertTitle>{heading}</AlertTitle>
      <AlertDescription>
        {subHeading}
      </AlertDescription>
    </Alert>
  )
}
