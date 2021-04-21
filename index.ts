import { AzureFunction, Context } from "@azure/functions"

const helloTrigger: AzureFunction = async function (context: Context): Promise<void> {
    context.log(`Triggered. Hello!`)
}

export default helloTrigger

