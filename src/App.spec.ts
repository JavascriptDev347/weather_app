import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "./App.vue"
import getLocationVue from "./components/getLocation.vue";

describe("App", (): void => {
    it("renders the GetLocation component", (): void => {
        const wrapper = shallowMount<App>(App);
        expect(wrapper.findComponent(getLocationVue).exists()).toBe(true);
    });
});


