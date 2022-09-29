# BitcoinRate
Author: Tiago Nunes
Date: 2022

Get Bitcoin rate from CoinDesk API

This app is Javascript based where it gets data from CoinDesk API.
The API sends data in JSON format like shown down.

I just extracted the bpi.EUR.rate, bpi.USD.rate and time.updated


API response example:
{
	"time": {
		"updated": "Sep 28, 2022 16:01:00 UTC",
		"updatedISO": "2022-09-28T16:01:00+00:00",
		"updateduk": "Sep 28, 2022 at 17:01 BST"
	},
	"disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
	"chartName": "Bitcoin",
	"bpi": {
		"USD": {
			"code": "USD",
			"symbol": "&#36;",
			"rate": "19,515.5957",
			"description": "United States Dollar",
			"rate_float": 19515.5957
		},
		"GBP": {
			"code": "GBP",
			"symbol": "&pound;",
			"rate": "16,307.0757",
			"description": "British Pound Sterling",
			"rate_float": 16307.0757
		},
		"EUR": {
			"code": "EUR",
			"symbol": "&euro;",
			"rate": "19,011.0395",
			"description": "Euro",
			"rate_float": 19011.0395
		}
	}
}
