import {AzureFunction, Context, HttpRequest} from "@azure/functions"
import {telemetry} from "@newrelic/telemetry-sdk"

const helloTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<object> {
    context.log(`Triggered. Hello!`)

    const telemetryKeys = Object.keys(telemetry).join(", ")
    context.log("keys from telemetry obj: " + telemetryKeys)

    return {
        body: "Hello, world! From " + req.url
    }
}

export default helloTrigger

