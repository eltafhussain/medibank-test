import { IDataList } from "@/interfaces";
const BASE_URL =
    "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2";

// fetch data from API
export const getData = async () => {
    return fetch(BASE_URL + "/people.json")
        .then((res) => res.json())
        .then((res: IDataList[]) => res);
};
