+++
title = "Test code syntax highlight"
date = 2020-10-13
draft = false

[taxonomies]
tags = ["test", "code"]

[extra]
disable_comments = true
toc = false
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
### multi-threading

import os ; n_cores = os.cpu_count() // 2 ;

from concurrent.futures import ThreadPoolExecutor

with ThreadPoolExecutor(max_workers=n_cores) as executor:
    executor.map(render, range(0, len(image_array)))
```
