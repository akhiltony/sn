---
title: "glide.security.multisso.check_table_exists_for_clone"
---

Description: When source instance does not have multisso enabled and target instance has multisso enabled during clone,  it may result in a bad state after clone so it needs check if table sso_properties exists. When this property presents, it has the patch that does the table existence check.

Value: `true`