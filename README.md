# DVLA SDET Coding Assessment

## Project Overview

This project is a TypeScript application developed for the DVLA Senior Software Development Engineer in Test (SDET) coding assessment.

It manages a small set of window-cleaning customers and bookings and implements two features.

## Technologies Used

- TypeScript
- Node.js
- Vitest for unit testing
- Git and GitHub for version control

## Data Structure

The application uses two in-memory arrays:

- **Customers:** Customer number, name and number of windows.
- **Bookings:**  Booking number, customer number and booking date.

The customer number links each booking to the corresponding customer.

## Feature 1 — Calculate Total Windows Cleaned

**Function:** `windowsCleanedOnDate(date: string): number`

Calculates the total number of windows to be cleaned on a specified date.

The implementation:

1. Filters bookings matching the supplied date.
2. Finds the customer associated with each booking.
3. Adds the number of windows for those customers.
4. Returns the total.

**Examples:**

- 2025-10-01 → 26 windows
- 2026-01-10 → 5 windows
- 2025-12-25 → 0 windows

## Feature 2 — Calculate Booking Cost

**Function:** `calculateTotalCost(bookingNumber: number): number`

Calculates the total cost of a specified booking using the pricing rules:

- £5 per property
- £1 per window

**Formula:**

Total cost = £5 + (Number of windows × £1)

**Examples:**

- Booking 1 → £9
- Booking 2 → £10
- Booking 3 → £15
- Booking 4 → £17

The function throws an error if the booking number or associated customer cannot be found.

## Installation and Setup

Install Node.js and npm before running the project.

Clone the repository:

git clone https://github.com/Shireesha-prog/DVLA-SDET-Assessment.git

Navigate to the project directory:

cd DVLA-SDET-Assessment

Install dependencies:

npm install

## Running the Application

The application contains exported functions in `src/main.ts`, which can be executed through the unit tests.

Run the project entry point:

npm run start

The entry point does not currently print results to the terminal.

## Running Unit Tests

Execute all unit tests:

npm test

Check TypeScript compilation:

npm run typecheck

## Unit Test Coverage

Eight unit tests are implemented using Vitest.

Feature 1:

- Calculate total windows for 2025-10-01.
- Calculate total windows for 2026-01-10.
- Return zero when no bookings exist for the date.

Feature 2:

- Calculate costs for booking numbers 1, 2, 3 and 4.
- Verify that an invalid booking number throws an error.

Latest verified results:

- Test files: 1 passed
- Unit tests: 8 passed
- TypeScript check: Passed

## Assumptions

- Customer and booking data are stored in memory.
- Each booking references one customer/property.
- Dates are supplied as strings in `YYYY-MM-DD` format.
- Each customer has a fixed number of windows.
- When no bookings match a date, Feature 1 returns zero.
- Feature 1 treats an unknown customer reference as contributing zero windows.
- Feature 2 throws an error for unknown bookings or customers.