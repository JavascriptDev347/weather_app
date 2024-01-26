// import { shallowMount } from "@vue/test-utils";
// import WindDrerictonVue from "./WindDrericton.vue";

// describe("WindDeriction vue", () => {
//     it("renders without crashing", (): void => {
//         const wrapper = shallowMount(WindDrerictonVue, {
//             props: {
//                 degrees: 90,
//             },
//         });
//         expect(wrapper).toBeTruthy()
//     });
// });

// it("renders the indicator with the correct  wind direction", (): void => {
//     const wrapper = shallowMount(WindDrerictonVue, {
//         props: {
//             degrees: 90,
//         },
//     });
//     const direction = wrapper.find("[data-testid=direction]");
//     expect(direction.attributes("style")).toContain("rotate(90deg)");
//     expect(direction.html()).toContain("⬇")
// });