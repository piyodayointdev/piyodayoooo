{if_str(
    status_effect_active("Heavenly Trumpet");
    concat(
        "&8 ";
        to_background_text(
            "Heavenly Trumpet";
            from_hex("#999999");
            from_hex("#555555");
            "PILL";
            "PILL"
        );
        " ";
        str(int(val(status_effect_duration("Heavenly Trumpet"))));
        "s"
    );
    if_str(
        eq_str(class(false; false); "Warrior");
        concat(
            "&a ";
            to_background_text(
                "Heavenly Trumpet";
                from_hex("#ffffff");
                from_hex("#ee0000");
                "PILL";
                "PILL"
            );
            " &aReady"
        );
        concat(
            "&8 ";
            to_background_text(
                "Heavenly Trumpet";
                from_hex("#999999");
                from_hex("#555555");
                "PILL";
                "PILL"
            );
            " &7Cooldown"
        )
    )
)}