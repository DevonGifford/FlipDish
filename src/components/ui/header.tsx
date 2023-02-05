// import { Separator } from "@radix-ui/react-separator"

export const Header = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
        <img src="public/flipdish-logo.svg" alt="Logo" height={100} width={200} />
        <div className="flex flex-col">
          <span className="font-semibold">Technical Assessment</span>
          <span>Devon Gifford</span>
        </div>

        {/* <Separator className="my-4 text-black bg-black "/> */}

    </div>

  )
}
