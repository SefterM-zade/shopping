package com.shopping_app.util;

import java.util.Date;

public class Utils
{
    public static String generateUniquePublicId(String name, Date date)
    {
        return removeSpaces(name.toLowerCase()) + "-" + date.getTime();
    }

    public static String removeSpaces(String str)
    {
        return str.replaceAll("\\s","");
    }
}
