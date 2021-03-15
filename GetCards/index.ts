import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import mockGenerator from "./data";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let numberOfMocks = Number(req?.query?.numberOfMocks)
    numberOfMocks = isNaN(numberOfMocks) ? 10 : numberOfMocks;
    context.res = {
        body: mockGenerator(numberOfMocks),
    };

};

export default httpTrigger;