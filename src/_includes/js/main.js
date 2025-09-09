$("[role=\"tab\"]").children("a").click(function () {
    console.log("ping");
    // if (!$(this).attr("aria-selected")) {
    //     // Remove all 
    //     $("[aria-selected]").attr("aria-selected").removeAttr()
    //     $(this).attr("aria-selected", true);
    // }
});

$("li").children("a").each(idx => {
    console.log(idx);
});