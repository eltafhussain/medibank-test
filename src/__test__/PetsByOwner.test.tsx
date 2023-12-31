import React from "react";
import { screen, render, cleanup, fireEvent, act, waitFor } from "@testing-library/react";
import PetList from "../components/PetsByOwner";
import mockData from "./mockData.json";
import * as hooks from "../hooks/data";
describe("Pets List", () => {
    beforeEach(() => {
        jest.spyOn(hooks, "useData").mockImplementation(() => ({
            petsByOwner: mockData.API_RESPONSE,
            petsByGender: [],
        }));
        render(<PetList />);
    });

    it("should show list of Pet's owner with first time to be expanded", () => {
        expect(screen.getByTestId("item-0-expanded")).toBeInTheDocument();
        expect(screen.queryByTestId("item-1-expanded")).toBeNull();
    });
    it("should populate all owners details correctly", () => {
        mockData.API_RESPONSE.forEach((owner, index) => {
            const petNumber = owner?.pets?.length || 0;
            expect(screen.getByTestId(`item-${index}`)).toBeInTheDocument();
            expect(screen.getByTestId(`item-${index}-title`)).toHaveTextContent(owner.name);
            expect(screen.getByTestId(`item-${index}-caption`)).toHaveTextContent(`${owner.gender} - ${owner.age}`);
            expect(screen.getByTestId(`item-${index}-pet`)).toHaveTextContent(
                `${petNumber} pet${petNumber > 1 ? "s" : ""}`,
            );
        });
    });

    it("should expand item when clicked", () => {
        expect(screen.getByTestId("item-0-expanded")).toBeInTheDocument();
        expect(screen.queryByTestId("item-1-expanded")).toBeNull();

        // fire click event
        fireEvent.click(screen.getByTestId("item-1"));
        waitFor(() => {
            expect(screen.getByTestId("item-1-expanded")).toBeInTheDocument();
            expect(screen.getByTestId("item-1-pet-0-name")).toHaveTextContent("Garfield");
            expect(screen.queryByTestId("item-4-expanded")).toBeNull();
            expect(screen.queryByTestId("item-0-expanded")).toBeNull();
            expect(screen.queryByTestId("item-2-expanded")).toBeNull();
        });
    });
    afterAll(cleanup);
});
