{if_str(
    status_effect_active("Guardian");
    concat(
        "&8 ";
        to_background_text(
            "Guardian";
            from_hex("#11ff11");
            from_hex("#008800");
            "PILL";
            "PILL"
        );
        " &a SAFE "
    );
    if_str(
        status_effect_active("Guardian");
        concat(
            "&a ";
            to_background_text(
                "Guardian";
                from_hex("#000000");
                from_hex("#ffa500");
                "PILL";
                "PILL"
            );
            " &4 UNSAFE "
        );
        concat(
            "&8 ";
            to_background_text(
                "Guardian";
                from_hex("#ff1111");
                from_hex("#550000");
                "PILL";
                "PILL"
            );
            " &4 UNSAFE "
        )
    )
)}