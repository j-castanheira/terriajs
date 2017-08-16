The file `wwwroot/config.json` in TerriaMap contains client-side configuration parameters.

It has this structure:

```
{
    "initializationUrls" : [
        "myinitfile",
        "anotherinitfile"
    ],
    "parameters": {
        "bingMapsKey": "...",
        ...
    }
}
```

## intializationUrls

Each string in the array specifies a single [initialization file](initialization-files.md) (catalog) to be loaded by TerriaJS.  The init files are loaded in the order they're specified.

If a string ends with `.json`, it is assumed to be a complete relative or absolute URL to an init file.  The file may be on an entirely separate web server, but in that case it must be accessible for [Cross-Origin Resource Sharing (CORS)](../connecting-to-data/cross-origin-resource-sharing.md).  It may also be generated by a service rather than being a simple static file.  If the URL is relative, it is relative to the config file.

If the string does not end with `.json`, such as `"foo"`, it refers to an init file on the same web server at `init/foo.json`.  In a TerriaMap directory on your computer, it can be found at `wwwroot/init/foo.json`.

## parameters

Specifies various options for configuring TerriaJS:

Option                      | Meaning
----------------------------|--------
`"appName"`                 | TerriaJS uses this name whenever it needs to display the name of the application.
`"autoPlay"` | true to start playing time-dynamic datasets on load, or false to start them paused.
`"bingMapsKey"`             | A [Bing Maps API key](https://msdn.microsoft.com/en-us/library/ff428642.aspx) used for requesting Bing Maps base maps and using the Bing Maps geocoder for searching. It is your responsibility to request a key and comply with all terms and conditions.
`"brandBarElements": [ ]`   | An array of strings of HTML that fill up the top left logo space.
`"defaultMaximumShownFeatureInfos"` | The maximum number of "feature info" boxes that can be displayed when clicking a point. (Default: 100)
`"disclaimer": {`<span><br/>&nbsp;&nbsp;`"text": "",`<br/>&nbsp;&nbsp;`"url": ""`<br/>`}`</span> | This text will be displayed prominently at the bottom of the map, with a clickable link to the URL.
`"feedbackUrl"`					| URL of the service used to send feedback.  If not specified, the "Give Feedback" button will not appear. | None 
`"googleAnalyticsKey"`      | A Google API key for [Google Analytics](https://analytics.google.com).  If specified, TerriaJS will send various events about how it's used to Google Analytics.
`"googleAnalyticsOptions"`  | Additional options that will be passed to the Google Analytics call.
`"printDisclaimer": {`<span><br/>&nbsp;&nbsp;`"text": "",`<br/>&nbsp;&nbsp;`"url": ""`<br/>`}`</span> | Same as `disclaimer`, except only shown in printed views.
`"supportEmail"`            | The email address shown when things go wrong.
`"mobileDefaultViewerMode"` | A string specifying the default view mode to load when running on a mobile platform. Options are: `"3DTerrain"`, `"3DSmooth"`, `"2D"`. (Default: `"2D"`)

## Advanced options

These options only need to be changed in unusual deployments. They define the URLs that are accessed for certain additional services, so must be changed if deploying as a static site, for instance.

Option                      | Meaning | Default
----------------------------|---------|---------
`"conversionServiceBaseUrl"`    | URL of OGR2OGR conversion service (part of TerriaJS-Server). | `convert/`
`"corsProxyBaseUrl"`            | URL of CORS proxy service (part of TerriaJS-Server)| `proxy/`
`"proj4ServiceBaseUrl"`         | URL of Proj4 projection lookup service (part of TerriaJS-Server) | `proj4/`
`"proxyableDomainsUrl"`         | URL of list of domains which the CORS proxy service will allow to be proxied. | `proxyabledomains/`
`"regionMappingDefinitionsUrl"` | URL of the JSON file that defines region mapping for CSV files. | `data/regionMapping.json`