import React from "react";
import { screen, render, cleanup, fireEvent, act, waitFor } from "@testing-library/react";
import PetsByGender from "../components/PetListByGender";
import mockData from "./mockData.json";
import * as hooks from "../hooks/data";
describe("Pets List", () => {
    beforeEach(() => {
        jest.spyOn(hooks, "useData").mockImplementation(() => ({
            petsByOwner: [],
            petsByGender: mockData.ORDER_RESPONSE_1,
        }));
        render(<PetsByGender />);
    });

    it("should show list of Pet's owner with first time to be expanded", () => {
        expect(screen.getByTestId("item-0-expanded")).toBeInTheDocument();
        expect(screen.getByTestId(`item-0-title`)).toHaveTextContent("Female");
        expect(screen.getByTestId(`item-1-title`)).toHaveTextContent("Male");
        expect(screen.queryByTestId("item-1-expanded")).toBeNull();
    });
    it("should populate all owners details correctly", () => {
        mockData.ORDER_RESPONSE_1.forEach((gender, index) => {
            const petNumber = gender?.pets?.length || 0;
            expect(screen.getByTestId(`item-${index}`)).toBeInTheDocument();
            expect(screen.getByTestId(`item-${index}-title`)).toHaveTextContent(gender.type);
        });
    });

    it("should expand item when clicked", () => {
        expect(screen.getByTestId("item-0-expanded")).toBeInTheDocument();
        expect(screen.queryByTestId("item-1-expanded")).toBeNull();
        expect(screen.getByTestId(`item-0-pet-0-name`)).toHaveTextContent(`Garfield`);
        expect(screen.getByTestId(`item-0-pet-0-owner`)).toHaveTextContent(`Jennifer - 18`);
       
        // fire click event
        fireEvent.click(screen.getByTestId("item-1"));
        waitFor(() => {
            expect(screen.getByTestId("item-1-expanded")).toBeInTheDocument();
            expect(screen.getByTestId(`item-1-pet-1-name`)).toHaveTextContent(`Jim`);
            expect(screen.getByTestId(`item-1-pet-1-owner`)).toHaveTextContent(`Fred - 40`);
            expect(screen.queryByTestId("item-0-expanded")).toBeNull();
        });
    });
    afterAll(cleanup);
});
