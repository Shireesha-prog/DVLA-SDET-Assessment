type Customer = {
    customerNumber: number;
    name: string;
    windows: number;
};

type Booking = {
    bookingNumber: number;
    customerNumber: number;
    date: string;
};

const customers: Customer[] = [
    { customerNumber: 1, name: "John", windows: 10 },
    { customerNumber: 2, name: "Paul", windows: 5 },
    { customerNumber: 3, name: "Ringo", windows: 12 },
    { customerNumber: 4, name: "George", windows: 4 }
];

const bookings: Booking[] = [
    { bookingNumber: 1, customerNumber: 4, date: "2025-10-01" },
    { bookingNumber: 2, customerNumber: 2, date: "2026-01-10" },
    { bookingNumber: 3, customerNumber: 1, date: "2025-10-01" },
    { bookingNumber: 4, customerNumber: 3, date: "2025-10-01" },
];

//Feature 1
//Calculate the total quantity of windows that will be cleaned on a specified date e.g. 2025-10-01
export function windowsCleanedOnDate(date: string): number {
    const bookingsOnDate = bookings.filter(booking => booking.date === date);
    const totalWindows = bookingsOnDate.reduce((total, booking) => {
        const customer = customers.find(
        c => c.customerNumber === booking.customerNumber
    );
    return total + (customer ? customer.windows : 0);
    }, 0);
    return totalWindows;
}

//Feature 2

//The window cleaner charges: £5 per property + £1 per window

//Calculate the total cost for a specified booking number.
export function calculateTotalCost(bookingNumber: number): number {
    const booking = bookings.find(b => b.bookingNumber === bookingNumber);
    if (!booking) {
        throw new Error("Booking not found");
    }

    const customer = customers.find(c => c.customerNumber === booking.customerNumber);
    if (!customer) {
        throw new Error("Customer not found");
    }

    const propertyCost = 5;
    const windowCost = 1 * customer.windows;
    return propertyCost + windowCost;
}