module.exports = {
    "convention": "https://commitlint.js.org/#/concepts-commit-conventions",
    "extends": [
        "@commitlint/config-conventional"
    ],
    "rules": {
        "header-max-length": [
            0
        ],
        "type-enum": [
            2,
            "always",
            [
                "feature",
                "fix",
                "refactor",
                "docs",
                "style",
                "test",
                "ci",
                "core",
                "wip"
            ]
        ],
        "scope-case": [
            0
        ],
        "subject-case": [
            2,
            "always",
            "sentence-case"
        ],
        "signed-off-by": [
            0
        ]
    }
};

