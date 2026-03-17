import { generateTimeSlots } from "./time-slot";

describe("generateTimeSlots", () => {
  it("should generate slots from 9 to 19 with 30-minute intervals", () => {
    const slots = generateTimeSlots(9, 19, 30);

    expect(slots.length).toBe(20);
    expect(slots[0]).toBe("09:00");
    expect(slots[slots.length - 1]).toBe("18:30");
  });

  it("should generate slots with 60-minute intervals", () => {
    const slots = generateTimeSlots(9, 12, 60);

    expect(slots.length).toBe(3);
    expect(slots[0]).toBe("09:00");
    expect(slots[1]).toBe("10:00");
    expect(slots[2]).toBe("11:00");
  });

  it("should return empty array when start equals end", () => {
    const slots = generateTimeSlots(9, 9, 30);

    expect(slots).toHaveLength(0);
  });

  it("should use 30-minute interval as default", () => {
    const slotsDefault = generateTimeSlots(9, 10);
    const slotsExplicit = generateTimeSlots(9, 10, 30);

    expect(slotsDefault).toEqual(slotsExplicit);
  });

  it("should generate slots with 15-minute intervals", () => {
    const slots = generateTimeSlots(9, 10, 15);

    expect(slots.length).toBe(4);
    expect(slots[0]).toBe("09:00");
    expect(slots[1]).toBe("09:15");
    expect(slots[2]).toBe("09:30");
    expect(slots[3]).toBe("09:45");
  });

  it("should return strings in HH:MM format", () => {
    const slots = generateTimeSlots(9, 10, 30);

    slots.forEach((slot) => {
      expect(slot).toMatch(/^\d{2}:\d{2}$/);
    });
  });
});
