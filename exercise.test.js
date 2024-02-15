it ("should create correct animal objects with createAnimal()", () => {
    const d = createAnimal("dog", "bark", "Woooof!");
    const s = createAnimal("sheep", "bleet", "BAAAAaaaa");

    expect(d["species"]).toBe("dog");
    expect(typeof d.bark).toBe("function");
    expect(s["species"]).toBe("sheep");
    expect(typeof d.bleet).toBe("function");
});
