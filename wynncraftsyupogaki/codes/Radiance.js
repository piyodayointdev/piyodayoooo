{if_str(
    status_effect_active("Radiance");
    concat(
        "&8 ";
        to_background_text(
            "Radiance";
            from_hex("#999999");
            from_hex("#555555");
            "PILL";
            "PILL"
        );
        " ";
        str(int(val(status_effect_duration("Radiance"))));
        "s"
    );
    if_str(
        eq_str(class(false; false); "Warrior");
        concat(
            "&a ";
            to_background_text(
                "Radiance";
                from_hex("#000000");
                from_hex("#ffa500");
                "PILL";
                "PILL"
            );
            " &aReady"
        );
        concat(
            "&8 ";
            to_background_text(
                "Radiance";
                from_hex("#999999");
                from_hex("#555555");
                "PILL";
                "PILL"
            );
            " &7Cooldown"
        )
    )
)}