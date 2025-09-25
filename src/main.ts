import { adapter } from "./adapter"
import { factory } from "./factoryMethod"
import { observer } from "./observer"
import { singleton } from "./singleton"

(
  async () => {
    factory()
    observer()
    singleton()
    adapter()
  }
)()
