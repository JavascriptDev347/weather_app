
// import { vi } from 'vitest'
// import { shallowMount } from "@vue/test-utils";
// import GetLocation from "./getLocation.vue";

// describe("GetLocation", () => {
//   it("should render the component without crashing", async (): Promise<void> => {
//     (window as any).navigator.geolocation = {
//       getCurrentPosition: () => { },
//     };
//     const wrapper = await shallowMount(GetLocation);
//     expect(wrapper).toBeTruthy();
//   });

//   it("displays when geolocation resolved successfully", async (): Promise<void> => {
//     const mockGeoLocation = vi.fn((successCallback: Function) => {
//       const position = {
//         coords: {
//           latitude: 51.5074, // Example latitude
//           longitude: -0.1278, // Example longitude
//         },
//       };
//       successCallback(position);
//     });
//     (window as any).navigator.geolocation = {
//       getCurrentPosition: mockGeoLocation,
//     };

//     const wrapper = await shallowMount(GetLocation);
//     expect(wrapper.vm.coords).toEqual({
//       latitude: 51.5074,
//       longitude: -0.1278,
//     });
//   });

//   it("displays a message when user denied access", async (): Promise<void> => {
//     const mockGeoLocation = vi.fn((successCallback: Function, errorCallback: Function) => {
//       const error = new Error("User denied geolocation access");
//       errorCallback(error);
//     });
//     (window as any).navigator.geolocation = {
//       getCurrentPosition: mockGeoLocation,
//     };

//     const wrapper = await shallowMount(GetLocation);
//     expect(wrapper.vm.geolocationBlockedByUser).toEqual(true);
//     expect(wrapper.html()).toContain("User denied access");
//   });
// });