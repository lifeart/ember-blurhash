ember-blurhash
==============================================================================

[blurhash](https://blurha.sh/) decoding modifier for ember, allow decode blurhash images and use it as css-variable


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-blurhash
```


Usage
------------------------------------------------------------------------------

```hbs
<style>
    .blurhash {
        background-image: url(/heavy-image.png), var(--blurhash-image);
        min-width: 640px;
        min-height: 480px;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

<div class="blurhash" {{blurhash-decoder 'LEHV6nWB2yk8pyo0adR*.7kCMdnj' 640 480 1}}></div>
<img src="/heavy-image.png" class="blurhash" {{blurhash-decoder 'LEHV6nWB2yk8pyo0adR*.7kCMdnj' 640 480 1}}></div>

```

Positional params:
```js
1.) hash (string)
2.) width (int) = 320
3.) height (int) = 240
4.) punch (int) (~contrast) of the blurhash decoding algorithm = 1
5.) rendered image width (int) = width = 320
6.) rendered image height (int) = height = 240
```

Additional hash params:
```js
 q = 0.85 // quality
 f = "image/jpeg" // format
 p = "--blurhash-image" // css variable name
 bg = true // apply as backgound-image instead of css-variable

```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
