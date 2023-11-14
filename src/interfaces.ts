export interface IPet {
    name: string,
    type: string
}
export interface IDataList {
    name: string,
    gender: string,
    age: number,
    pets: IPet[]
}

export interface IPetsWithOwner {
    name: string,
    type: string,
    owner: {
        name: string,
        gender: string,
        age: number,
    }
}

export interface IPetListByGender {
    type: string,
    pets: IPetsWithOwner[]
}