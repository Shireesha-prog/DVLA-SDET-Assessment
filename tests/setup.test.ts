import {it, expect } from "vitest";
import {windowsCleanedOnDate, calculateTotalCost} from "../src/main.js";

it("should calculate the total quantity of windows cleaned on a specified date : 2025-10-01", () => {
    const date = "2025-10-01";
    const totalWindows = windowsCleanedOnDate(date);
    expect(totalWindows).toBe(26); // 10 (John) + 12 (Ringo) + 4 (George) = 26  
});

it("should calculate the total quantity of windows cleaned on a specified date : 2026-01-10", () => {
    const date = "2026-01-10";
    const totalWindows = windowsCleanedOnDate(date);
    expect(totalWindows).toBe(5); // 5 (Paul) = 5
});
//No bookings on this date
it("should return 0 if there are no bookings on the specified date : 2025-12-25", () => {
    const date = "2025-12-25";
    const totalWindows = windowsCleanedOnDate(date);
    expect(totalWindows).toBe(0);
}); 
//Feature 2
it("should calculate the total cost for a specified booking number : 1", () => {
    const bookingNumber = 1;
    const totalCost = calculateTotalCost(bookingNumber);
    expect(totalCost).toBe(9); // £5 (property) + £4 (4 windows for George) = £9
}); 
it("should calculate the total cost for a specified booking number : 2", () => {
    const bookingNumber = 2;
    const totalCost = calculateTotalCost(bookingNumber);
    expect(totalCost).toBe(10); // £5 (property) + £5 (5 windows for Paul) = £10
});
it("should calculate the total cost for a specified booking number : 3", () => {
    const bookingNumber = 3;
    const totalCost = calculateTotalCost(bookingNumber);
    expect(totalCost).toBe(15); // £5 (property) + £10 (10 windows for John) = £15
});
it("should calculate the total cost for a specified booking number : 4", () => {
    const bookingNumber = 4;
    const totalCost = calculateTotalCost(bookingNumber);
    expect(totalCost).toBe(17); // £5 (property) + £12 (12 windows for Ringo) = £17
});
 it("should throw an error if the booking number does not exist", () => {
    const bookingNumber = 999;  
    expect(() => calculateTotalCost(bookingNumber)).toThrow("Booking not found");   
 } );
