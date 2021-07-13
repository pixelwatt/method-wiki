---
sidebar_position: 6
---

# Limitations & Known Issues

* Currently, code for custom taxonomy archives cannot be reliably built inside the layout class due to limitations with the build_page() method. While there is also not a clear route for building directly in template files, an init_archive() method will be introduced soon in a future 1.3.x release of Method.