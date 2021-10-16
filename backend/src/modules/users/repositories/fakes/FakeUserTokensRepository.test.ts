import * as FakeUserTokensRepository from "@modules/users/repositories/fakes/FakeUserTokensRepository"
// @ponicode
describe("generate", () => {
    let inst: any

    beforeEach(() => {
        inst = new FakeUserTokensRepository.default()
    })

    test("0", async () => {
        await inst.generate("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("1", async () => {
        await inst.generate("c466a48309794261b64a4f02cfcc3d64")
    })

    test("2", async () => {
        await inst.generate(9876)
    })

    test("3", async () => {
        await inst.generate("da7588892")
    })

    test("4", async () => {
        await inst.generate(12345)
    })

    test("5", async () => {
        await inst.generate("")
    })
})

// @ponicode
describe("findByToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new FakeUserTokensRepository.default()
    })

    test("0", async () => {
        await inst.findByToken("%}")
    })

    test("1", async () => {
        await inst.findByToken("not")
    })

    test("2", async () => {
        await inst.findByToken("(")
    })

    test("3", async () => {
        await inst.findByToken("}")
    })

    test("4", async () => {
        await inst.findByToken("+=")
    })

    test("5", async () => {
        await inst.findByToken("")
    })
})
