+++
title = "Test Code Syntax Highlighting"
date = 2025-01-27
draft = false

[taxonomies]
tags = ["test-formatting"]

[extra]
disable_comments = false
permalink = "https://alphara.art/posts/code-syntax-highlighting/"
toc = false

[extra.earlier]
title = "Test Typography"
permalink = "https://alphara.art/posts/typography/"

[extra.later]
title = "Test YouTube"
permalink = "https://alphara.art/posts/youtube/"
+++

```rust
fn factorial(n: u64) -> u64 {
    match n {
        0 => 1,
        _ => n * factorial(n-1)
    }
}
```

```typescript
const sum = (n: number) =>  n * (n + 1) / 2
```

```python
import os ; n_cores = os.cpu_count() // 2 ;

from concurrent.futures import ThreadPoolExecutor

with ThreadPoolExecutor(max_workers=n_cores) as executor:
    executor.map(render, range(0, len(image_array)))
```

```zig
const std = @import("std");

pub fn main() void {
    const user = User{
        .power = 9001,
        .name = "Goku",
    };

    std.debug.print("{s}'s power is {d}\n", .{ user.name, user.power });
}

pub const User = struct {
    power: u64,
    name: []const u8,
};
```
