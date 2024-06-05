(self.webpackChunkapp_dogeverse = self.webpackChunkapp_dogeverse || []).push([
  [404],
  {
    6010: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.CoinbaseWalletSDK = void 0);
      const e = d(5605),
        m = d(9394),
        u = d(2329),
        f = d(7260),
        h = d(1579),
        t = d(2163),
        i = d(5129),
        o = d(3483),
        l = d(7144),
        c = d(4587),
        p = d(7938);
      class r {
        constructor(a) {
          var g, y, _;
          (this._appName = ""),
            (this._appLogoUrl = null),
            (this._relay = null),
            (this._relayEventManager = null);
          const v = a.linkAPIUrl || m.LINK_API_URL;
          (this._overrideIsMetaMask =
            !(typeof a.overrideIsMetaMask > "u") && a.overrideIsMetaMask),
            (this._overrideIsCoinbaseWallet =
              null === (g = a.overrideIsCoinbaseWallet) || void 0 === g || g),
            (this._overrideIsCoinbaseBrowser =
              null !== (y = a.overrideIsCoinbaseBrowser) && void 0 !== y && y),
            (this._diagnosticLogger = a.diagnosticLogger),
            (this._reloadOnDisconnect =
              null === (_ = a.reloadOnDisconnect) || void 0 === _ || _);
          const b = new URL(v);
          if (
            ((this._storage = new f.ScopedLocalStorage(
              `-walletlink:${b.protocol}//${b.host}`
            )),
            this._storage.setItem("version", r.VERSION),
            this.walletExtension || this.coinbaseBrowser)
          )
            return;
          this._relayEventManager = new o.RelayEventManager();
          const w = (0, u.isMobileWeb)(),
            T = {
              linkAPIUrl: v,
              version: p.LIB_VERSION,
              darkMode: !!a.darkMode,
              headlessMode: !!a.headlessMode,
              uiConstructor:
                a.uiConstructor ||
                ((k) =>
                  w ? new i.MobileRelayUI(k) : new l.WalletLinkRelayUI(k)),
              storage: this._storage,
              relayEventManager: this._relayEventManager,
              diagnosticLogger: this._diagnosticLogger,
              reloadOnDisconnect: this._reloadOnDisconnect,
              enableMobileWalletLink: a.enableMobileWalletLink,
            };
          (this._relay = w ? new t.MobileRelay(T) : new c.WalletLinkRelay(T)),
            this.setAppInfo(a.appName, a.appLogoUrl),
            !a.headlessMode && this._relay.attachUI();
        }
        makeWeb3Provider(a = "", g = 1) {
          const y = this.walletExtension;
          if (y)
            return (
              this.isCipherProvider(y) || y.setProviderInfo(a, g),
              !1 === this._reloadOnDisconnect &&
                "function" == typeof y.disableReloadOnDisconnect &&
                y.disableReloadOnDisconnect(),
              y
            );
          const _ = this.coinbaseBrowser;
          if (_) return _;
          const v = this._relay;
          if (!v || !this._relayEventManager || !this._storage)
            throw new Error("Relay not initialized, should never happen");
          return (
            a || v.setConnectDisabled(!0),
            new h.CoinbaseWalletProvider({
              relayProvider: () => Promise.resolve(v),
              relayEventManager: this._relayEventManager,
              storage: this._storage,
              jsonRpcUrl: a,
              chainId: g,
              qrUrl: this.getQrUrl(),
              diagnosticLogger: this._diagnosticLogger,
              overrideIsMetaMask: this._overrideIsMetaMask,
              overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
              overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser,
            })
          );
        }
        setAppInfo(a, g) {
          var y;
          (this._appName = a || "DApp"),
            (this._appLogoUrl = g || (0, u.getFavicon)());
          const _ = this.walletExtension;
          _
            ? this.isCipherProvider(_) ||
              _.setAppInfo(this._appName, this._appLogoUrl)
            : null === (y = this._relay) ||
              void 0 === y ||
              y.setAppInfo(this._appName, this._appLogoUrl);
        }
        disconnect() {
          var a;
          const g = null == this ? void 0 : this.walletExtension;
          g
            ? g.close()
            : null === (a = this._relay) || void 0 === a || a.resetAndReload();
        }
        getQrUrl() {
          var a, g;
          return null !==
            (g =
              null === (a = this._relay) || void 0 === a
                ? void 0
                : a.getQRCodeUrl()) && void 0 !== g
            ? g
            : null;
        }
        getCoinbaseWalletLogo(a, g = 240) {
          return (0, e.walletLogo)(a, g);
        }
        get walletExtension() {
          var a;
          return null !== (a = window.coinbaseWalletExtension) && void 0 !== a
            ? a
            : window.walletLinkExtension;
        }
        get coinbaseBrowser() {
          var a, g;
          try {
            const y =
              null !== (a = window.ethereum) && void 0 !== a
                ? a
                : null === (g = window.top) || void 0 === g
                ? void 0
                : g.ethereum;
            return y && "isCoinbaseBrowser" in y && y.isCoinbaseBrowser
              ? y
              : void 0;
          } catch {
            return;
          }
        }
        isCipherProvider(a) {
          return "boolean" == typeof a.isCipher && a.isCipher;
        }
      }
      (s.CoinbaseWalletSDK = r), (r.VERSION = p.LIB_VERSION);
    },
    5605: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.walletLogo = void 0),
        (s.walletLogo = (e, m) => {
          let u;
          switch (e) {
            case "standard":
            default:
              return (
                (u = m),
                `data:image/svg+xml,%3Csvg width='${m}' height='${u}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
              );
            case "circle":
              return (
                (u = m),
                `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${m}' height='${u}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
              );
            case "text":
              return (
                (u = (0.1 * m).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${m}' height='${u}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
              );
            case "textWithLogo":
              return (
                (u = (0.25 * m).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${m}' height='${u}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
              );
            case "textLight":
              return (
                (u = (0.1 * m).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${m}' height='${u}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
              );
            case "textWithLogoLight":
              return (
                (u = (0.25 * m).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${m}' height='${u}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
              );
          }
        });
    },
    9394: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.LINK_API_URL = void 0),
        (s.LINK_API_URL = "https://www.walletlink.org");
    },
    2564: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.errorValues = s.standardErrorCodes = void 0),
        (s.standardErrorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        }),
        (s.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        });
    },
    6609: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.standardErrors = void 0);
      const e = d(2564),
        m = d(5112);
      function u(l, c) {
        const [p, r] = h(c);
        return new t(l, p || (0, m.getMessageFromCode)(l), r);
      }
      function f(l, c) {
        const [p, r] = h(c);
        return new i(l, p || (0, m.getMessageFromCode)(l), r);
      }
      function h(l) {
        if (l) {
          if ("string" == typeof l) return [l];
          if ("object" == typeof l && !Array.isArray(l)) {
            const { message: c, data: p } = l;
            if (c && "string" != typeof c)
              throw new Error("Must specify string message.");
            return [c || void 0, p];
          }
        }
        return [];
      }
      s.standardErrors = {
        rpc: {
          parse: (l) => u(e.standardErrorCodes.rpc.parse, l),
          invalidRequest: (l) => u(e.standardErrorCodes.rpc.invalidRequest, l),
          invalidParams: (l) => u(e.standardErrorCodes.rpc.invalidParams, l),
          methodNotFound: (l) => u(e.standardErrorCodes.rpc.methodNotFound, l),
          internal: (l) => u(e.standardErrorCodes.rpc.internal, l),
          server: (l) => {
            if (!l || "object" != typeof l || Array.isArray(l))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            const { code: c } = l;
            if (!Number.isInteger(c) || c > -32005 || c < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return u(c, l);
          },
          invalidInput: (l) => u(e.standardErrorCodes.rpc.invalidInput, l),
          resourceNotFound: (l) =>
            u(e.standardErrorCodes.rpc.resourceNotFound, l),
          resourceUnavailable: (l) =>
            u(e.standardErrorCodes.rpc.resourceUnavailable, l),
          transactionRejected: (l) =>
            u(e.standardErrorCodes.rpc.transactionRejected, l),
          methodNotSupported: (l) =>
            u(e.standardErrorCodes.rpc.methodNotSupported, l),
          limitExceeded: (l) => u(e.standardErrorCodes.rpc.limitExceeded, l),
        },
        provider: {
          userRejectedRequest: (l) =>
            f(e.standardErrorCodes.provider.userRejectedRequest, l),
          unauthorized: (l) => f(e.standardErrorCodes.provider.unauthorized, l),
          unsupportedMethod: (l) =>
            f(e.standardErrorCodes.provider.unsupportedMethod, l),
          disconnected: (l) => f(e.standardErrorCodes.provider.disconnected, l),
          chainDisconnected: (l) =>
            f(e.standardErrorCodes.provider.chainDisconnected, l),
          unsupportedChain: (l) =>
            f(e.standardErrorCodes.provider.unsupportedChain, l),
          custom: (l) => {
            if (!l || "object" != typeof l || Array.isArray(l))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            const { code: c, message: p, data: r } = l;
            if (!p || "string" != typeof p)
              throw new Error('"message" must be a nonempty string');
            return new i(c, p, r);
          },
        },
      };
      class t extends Error {
        constructor(c, p, r) {
          if (!Number.isInteger(c))
            throw new Error('"code" must be an integer.');
          if (!p || "string" != typeof p)
            throw new Error('"message" must be a nonempty string.');
          super(p), (this.code = c), void 0 !== r && (this.data = r);
        }
      }
      class i extends t {
        constructor(c, p, r) {
          if (
            !(function o(l) {
              return Number.isInteger(l) && l >= 1e3 && l <= 4999;
            })(c)
          )
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(c, p, r);
        }
      }
    },
    3311: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.standardErrors =
          s.standardErrorCodes =
          s.serializeError =
          s.getMessageFromCode =
          s.getErrorCode =
            void 0);
      const e = d(2564);
      Object.defineProperty(s, "standardErrorCodes", {
        enumerable: !0,
        get: function () {
          return e.standardErrorCodes;
        },
      });
      const m = d(6609);
      Object.defineProperty(s, "standardErrors", {
        enumerable: !0,
        get: function () {
          return m.standardErrors;
        },
      });
      const u = d(3008);
      Object.defineProperty(s, "serializeError", {
        enumerable: !0,
        get: function () {
          return u.serializeError;
        },
      });
      const f = d(5112);
      Object.defineProperty(s, "getErrorCode", {
        enumerable: !0,
        get: function () {
          return f.getErrorCode;
        },
      }),
        Object.defineProperty(s, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return f.getMessageFromCode;
          },
        });
    },
    3008: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.serializeError = void 0);
      const e = d(8315),
        m = d(7938),
        u = d(2564),
        f = d(5112);
      s.serializeError = function h(o, l) {
        const c = (0, f.serialize)(
            (function t(o) {
              return "string" == typeof o
                ? { message: o, code: u.standardErrorCodes.rpc.internal }
                : (0, e.isErrorResponse)(o)
                ? Object.assign(Object.assign({}, o), {
                    message: o.errorMessage,
                    code: o.errorCode,
                    data: { method: o.method },
                  })
                : o;
            })(o),
            { shouldIncludeStack: !0 }
          ),
          p = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
        p.searchParams.set("version", m.LIB_VERSION),
          p.searchParams.set("code", c.code.toString());
        const r = (function i(o, l) {
          const c = o?.method;
          if (c) return c;
          if (void 0 !== l) {
            if ("string" == typeof l) return l;
            if (!Array.isArray(l)) return l.method;
            if (l.length > 0) return l[0].method;
          }
        })(c.data, l);
        return (
          r && p.searchParams.set("method", r),
          p.searchParams.set("message", c.message),
          Object.assign(Object.assign({}, c), { docUrl: p.href })
        );
      };
    },
    5112: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.serialize =
          s.getErrorCode =
          s.isValidCode =
          s.getMessageFromCode =
          s.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      const e = d(2564),
        m = "Unspecified error message.";
      function u(r, n = m) {
        if (r && Number.isInteger(r)) {
          const a = r.toString();
          if (c(e.errorValues, a)) return e.errorValues[a].message;
          if (o(r)) return s.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function f(r) {
        if (!Number.isInteger(r)) return !1;
        const n = r.toString();
        return !(!e.errorValues[n] && !o(r));
      }
      function o(r) {
        return r >= -32099 && r <= -32e3;
      }
      function l(r) {
        return r && "object" == typeof r && !Array.isArray(r)
          ? Object.assign({}, r)
          : r;
      }
      function c(r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
      }
      function p(r, n) {
        return (
          "object" == typeof r &&
          null !== r &&
          n in r &&
          "string" == typeof r[n]
        );
      }
      (s.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (s.getMessageFromCode = u),
        (s.isValidCode = f),
        (s.getErrorCode = function h(r) {
          var n;
          return "number" == typeof r
            ? r
            : (function t(r) {
                return (
                  "object" == typeof r &&
                  null !== r &&
                  ("number" == typeof r.code || "number" == typeof r.errorCode)
                );
              })(r)
            ? null !== (n = r.code) && void 0 !== n
              ? n
              : r.errorCode
            : void 0;
        }),
        (s.serialize = function i(r, { shouldIncludeStack: n = !1 } = {}) {
          const a = {};
          if (
            r &&
            "object" == typeof r &&
            !Array.isArray(r) &&
            c(r, "code") &&
            f(r.code)
          ) {
            const g = r;
            (a.code = g.code),
              g.message && "string" == typeof g.message
                ? ((a.message = g.message), c(g, "data") && (a.data = g.data))
                : ((a.message = u(a.code)), (a.data = { originalError: l(r) }));
          } else
            (a.code = e.standardErrorCodes.rpc.internal),
              (a.message = p(r, "message") ? r.message : m),
              (a.data = { originalError: l(r) });
          return n && (a.stack = p(r, "stack") ? r.stack : void 0), a;
        });
    },
    8737: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.ProviderType =
          s.RegExpString =
          s.IntNumber =
          s.BigIntString =
          s.AddressString =
          s.HexString =
          s.OpaqueType =
            void 0),
        (s.OpaqueType = function d() {
          return (u) => u;
        }),
        (s.HexString = (u) => u),
        (s.AddressString = (u) => u),
        (s.BigIntString = (u) => u),
        (s.IntNumber = function e(u) {
          return Math.floor(u);
        }),
        (s.RegExpString = (u) => u);
      var m = (function (u) {
        return (
          (u.CoinbaseWallet = "CoinbaseWallet"),
          (u.MetaMask = "MetaMask"),
          (u.Unselected = ""),
          u
        );
      })(m || (s.ProviderType = m = {}));
    },
    2329: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (B) {
          return B && B.__esModule ? B : { default: B };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.isMobileWeb =
          s.getLocation =
          s.isInIFrame =
          s.createQrUrl =
          s.getFavicon =
          s.range =
          s.isBigNumber =
          s.ensureParsedJSONObject =
          s.ensureBN =
          s.ensureRegExpString =
          s.ensureIntNumber =
          s.ensureBuffer =
          s.ensureAddressString =
          s.ensureEvenLengthHexString =
          s.ensureHexString =
          s.isHexString =
          s.prepend0x =
          s.strip0x =
          s.has0xPrefix =
          s.hexStringFromIntNumber =
          s.intNumberFromHexString =
          s.bigIntStringFromBN =
          s.hexStringFromBuffer =
          s.hexStringToUint8Array =
          s.uint8ArrayToHex =
          s.randomBytesHex =
            void 0);
      const m = e(d(2662)),
        u = d(3311),
        f = d(8737),
        h = /^[0-9]*$/,
        t = /^[a-f0-9]*$/;
      function o(B) {
        return [...B].map((z) => z.toString(16).padStart(2, "0")).join("");
      }
      function a(B) {
        return B.startsWith("0x") || B.startsWith("0X");
      }
      function g(B) {
        return a(B) ? B.slice(2) : B;
      }
      function y(B) {
        return a(B) ? `0x${B.slice(2)}` : `0x${B}`;
      }
      function _(B) {
        if ("string" != typeof B) return !1;
        const z = g(B).toLowerCase();
        return t.test(z);
      }
      function v(B, z = !1) {
        if ("string" == typeof B) {
          const K = g(B).toLowerCase();
          if (t.test(K)) return (0, f.HexString)(z ? `0x${K}` : K);
        }
        throw u.standardErrors.rpc.invalidParams(
          `"${String(B)}" is not a hexadecimal string`
        );
      }
      function b(B, z = !1) {
        let K = v(B, !1);
        return (
          K.length % 2 == 1 && (K = (0, f.HexString)(`0${K}`)),
          z ? (0, f.HexString)(`0x${K}`) : K
        );
      }
      function S(B) {
        if ("number" == typeof B && Number.isInteger(B))
          return (0, f.IntNumber)(B);
        if ("string" == typeof B) {
          if (h.test(B)) return (0, f.IntNumber)(Number(B));
          if (_(B))
            return (0, f.IntNumber)(new m.default(b(B, !1), 16).toNumber());
        }
        throw u.standardErrors.rpc.invalidParams(
          `Not an integer: ${String(B)}`
        );
      }
      function $(B) {
        if (null == B || "function" != typeof B.constructor) return !1;
        const { constructor: z } = B;
        return "function" == typeof z.config && "number" == typeof z.EUCLID;
      }
      function Y() {
        try {
          return null !== window.frameElement;
        } catch {
          return !1;
        }
      }
      (s.randomBytesHex = function i(B) {
        return o(crypto.getRandomValues(new Uint8Array(B)));
      }),
        (s.uint8ArrayToHex = o),
        (s.hexStringToUint8Array = function l(B) {
          return new Uint8Array(B.match(/.{1,2}/g).map((z) => parseInt(z, 16)));
        }),
        (s.hexStringFromBuffer = function c(B, z = !1) {
          const K = B.toString("hex");
          return (0, f.HexString)(z ? `0x${K}` : K);
        }),
        (s.bigIntStringFromBN = function p(B) {
          return (0, f.BigIntString)(B.toString(10));
        }),
        (s.intNumberFromHexString = function r(B) {
          return (0, f.IntNumber)(new m.default(b(B, !1), 16).toNumber());
        }),
        (s.hexStringFromIntNumber = function n(B) {
          return (0, f.HexString)(`0x${new m.default(B).toString(16)}`);
        }),
        (s.has0xPrefix = a),
        (s.strip0x = g),
        (s.prepend0x = y),
        (s.isHexString = _),
        (s.ensureHexString = v),
        (s.ensureEvenLengthHexString = b),
        (s.ensureAddressString = function E(B) {
          if ("string" == typeof B) {
            const z = g(B).toLowerCase();
            if (_(z) && 40 === z.length) return (0, f.AddressString)(y(z));
          }
          throw u.standardErrors.rpc.invalidParams(
            `Invalid Ethereum address: ${String(B)}`
          );
        }),
        (s.ensureBuffer = function w(B) {
          if (Buffer.isBuffer(B)) return B;
          if ("string" == typeof B) {
            if (_(B)) {
              const z = b(B, !1);
              return Buffer.from(z, "hex");
            }
            return Buffer.from(B, "utf8");
          }
          throw u.standardErrors.rpc.invalidParams(
            `Not binary data: ${String(B)}`
          );
        }),
        (s.ensureIntNumber = S),
        (s.ensureRegExpString = function T(B) {
          if (B instanceof RegExp) return (0, f.RegExpString)(B.toString());
          throw u.standardErrors.rpc.invalidParams(
            `Not a RegExp: ${String(B)}`
          );
        }),
        (s.ensureBN = function k(B) {
          if (null !== B && (m.default.isBN(B) || $(B)))
            return new m.default(B.toString(10), 10);
          if ("number" == typeof B) return new m.default(S(B));
          if ("string" == typeof B) {
            if (h.test(B)) return new m.default(B, 10);
            if (_(B)) return new m.default(b(B, !1), 16);
          }
          throw u.standardErrors.rpc.invalidParams(
            `Not an integer: ${String(B)}`
          );
        }),
        (s.ensureParsedJSONObject = function x(B) {
          if ("string" == typeof B) return JSON.parse(B);
          if ("object" == typeof B) return B;
          throw u.standardErrors.rpc.invalidParams(
            `Not a JSON string or an object: ${String(B)}`
          );
        }),
        (s.isBigNumber = $),
        (s.range = function G(B, z) {
          return Array.from({ length: z - B }, (K, H) => B + H);
        }),
        (s.getFavicon = function re() {
          const B =
              document.querySelector('link[sizes="192x192"]') ||
              document.querySelector('link[sizes="180x180"]') ||
              document.querySelector('link[rel="icon"]') ||
              document.querySelector('link[rel="shortcut icon"]'),
            { protocol: z, host: K } = document.location,
            H = B ? B.getAttribute("href") : null;
          return !H || H.startsWith("javascript:") || H.startsWith("vbscript:")
            ? null
            : H.startsWith("http://") ||
              H.startsWith("https://") ||
              H.startsWith("data:")
            ? H
            : H.startsWith("//")
            ? z + H
            : `${z}//${K}${H}`;
        }),
        (s.createQrUrl = function le(B, z, K, H, W, V) {
          return `${K}/#/link?${new URLSearchParams({
            [H ? "parent-id" : "id"]: B,
            secret: z,
            server: K,
            v: W,
            chainId: V.toString(),
          }).toString()}`;
        }),
        (s.isInIFrame = Y),
        (s.getLocation = function Q() {
          try {
            return Y() && window.top ? window.top.location : window.location;
          } catch {
            return window.location;
          }
        }),
        (s.isMobileWeb = function X() {
          var B;
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            null === (B = window?.navigator) || void 0 === B
              ? void 0
              : B.userAgent
          );
        });
    },
    9404: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.CoinbaseWalletProvider = s.CoinbaseWalletSDK = void 0);
      const e = d(6010),
        m = d(1579);
      var u = d(6010);
      Object.defineProperty(s, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function () {
          return u.CoinbaseWalletSDK;
        },
      });
      var f = d(1579);
      Object.defineProperty(s, "CoinbaseWalletProvider", {
        enumerable: !0,
        get: function () {
          return f.CoinbaseWalletProvider;
        },
      }),
        (s.default = e.CoinbaseWalletSDK),
        typeof window < "u" &&
          ((window.CoinbaseWalletSDK = e.CoinbaseWalletSDK),
          (window.CoinbaseWalletProvider = m.CoinbaseWalletProvider),
          (window.WalletLink = e.CoinbaseWalletSDK),
          (window.WalletLinkProvider = m.CoinbaseWalletProvider));
    },
    8048: (I, s, d) => {
      "use strict";
      var e = d(7156).default;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.Cipher = void 0);
      const m = d(2329);
      s.Cipher = class u {
        constructor(h) {
          this.secret = h;
        }
        encrypt(h) {
          var t = this;
          return e(function* () {
            const i = t.secret;
            if (64 !== i.length) throw Error("secret must be 256 bits");
            const o = crypto.getRandomValues(new Uint8Array(12)),
              l = yield crypto.subtle.importKey(
                "raw",
                (0, m.hexStringToUint8Array)(i),
                { name: "aes-gcm" },
                !1,
                ["encrypt", "decrypt"]
              ),
              c = new TextEncoder(),
              p = yield window.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: o },
                l,
                c.encode(h)
              ),
              n = p.slice(p.byteLength - 16),
              a = p.slice(0, p.byteLength - 16),
              g = new Uint8Array(n),
              y = new Uint8Array(a),
              _ = new Uint8Array([...o, ...g, ...y]);
            return (0, m.uint8ArrayToHex)(_);
          })();
        }
        decrypt(h) {
          var t = this;
          return e(function* () {
            const i = t.secret;
            if (64 !== i.length) throw Error("secret must be 256 bits");
            return new Promise((o, l) => {
              e(function* () {
                const c = yield crypto.subtle.importKey(
                    "raw",
                    (0, m.hexStringToUint8Array)(i),
                    { name: "aes-gcm" },
                    !1,
                    ["encrypt", "decrypt"]
                  ),
                  p = (0, m.hexStringToUint8Array)(h),
                  r = p.slice(0, 12),
                  n = p.slice(12, 28),
                  a = p.slice(28),
                  g = new Uint8Array([...a, ...n]),
                  y = { name: "AES-GCM", iv: new Uint8Array(r) };
                try {
                  const _ = yield window.crypto.subtle.decrypt(y, c, g),
                    v = new TextDecoder();
                  o(v.decode(_));
                } catch (_) {
                  l(_);
                }
              })();
            });
          })();
        }
      };
    },
    7260: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.ScopedLocalStorage = void 0),
        (s.ScopedLocalStorage = class d {
          constructor(m) {
            this.scope = m;
          }
          setItem(m, u) {
            localStorage.setItem(this.scopedKey(m), u);
          }
          getItem(m) {
            return localStorage.getItem(this.scopedKey(m));
          }
          removeItem(m) {
            localStorage.removeItem(this.scopedKey(m));
          }
          clear() {
            const m = this.scopedKey(""),
              u = [];
            for (let f = 0; f < localStorage.length; f++) {
              const h = localStorage.key(f);
              "string" == typeof h && h.startsWith(m) && u.push(h);
            }
            u.forEach((f) => localStorage.removeItem(f));
          }
          scopedKey(m) {
            return `${this.scope}:${m}`;
          }
        });
    },
    3187: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default =
          '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}');
    },
    8070: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (f) {
          return f && f.__esModule ? f : { default: f };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.injectCssReset = void 0);
      const m = e(d(3187));
      s.injectCssReset = function u() {
        const f = document.createElement("style");
        (f.type = "text/css"),
          f.appendChild(document.createTextNode(m.default)),
          document.documentElement.appendChild(f);
      };
    },
    1579: function (I, s, d) {
      "use strict";
      var e = d(7156).default,
        m =
          (this && this.__importDefault) ||
          function (v) {
            return v && v.__esModule ? v : { default: v };
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.CoinbaseWalletProvider = void 0);
      const u = m(d(2662)),
        f = d(9424),
        h = d(3311),
        t = d(2329),
        i = d(2163),
        o = d(8561),
        l = d(6293),
        c = d(8315),
        p = m(d(3348)),
        r = d(6480),
        n = d(4016),
        a = d(2506),
        g = "DefaultChainId",
        y = "DefaultJsonRpcUrl";
      s.CoinbaseWalletProvider = class _ extends f.EventEmitter {
        constructor(b) {
          var E, w;
          super(),
            (this._filterPolyfill = new n.FilterPolyfill(this)),
            (this._subscriptionManager = new a.SubscriptionManager(this)),
            (this._relay = null),
            (this._addresses = []),
            (this.hasMadeFirstChainChangedEmission = !1),
            (this.setProviderInfo = this.setProviderInfo.bind(this)),
            (this.updateProviderInfo = this.updateProviderInfo.bind(this)),
            (this.getChainId = this.getChainId.bind(this)),
            (this.setAppInfo = this.setAppInfo.bind(this)),
            (this.enable = this.enable.bind(this)),
            (this.close = this.close.bind(this)),
            (this.send = this.send.bind(this)),
            (this.sendAsync = this.sendAsync.bind(this)),
            (this.request = this.request.bind(this)),
            (this._setAddresses = this._setAddresses.bind(this)),
            (this.scanQRCode = this.scanQRCode.bind(this)),
            (this.genericRequest = this.genericRequest.bind(this)),
            (this._chainIdFromOpts = b.chainId),
            (this._jsonRpcUrlFromOpts = b.jsonRpcUrl),
            (this._overrideIsMetaMask = b.overrideIsMetaMask),
            (this._relayProvider = b.relayProvider),
            (this._storage = b.storage),
            (this._relayEventManager = b.relayEventManager),
            (this.diagnostic = b.diagnosticLogger),
            (this.reloadOnDisconnect = !0),
            (this.isCoinbaseWallet =
              null === (E = b.overrideIsCoinbaseWallet) || void 0 === E || E),
            (this.isCoinbaseBrowser =
              null !== (w = b.overrideIsCoinbaseBrowser) && void 0 !== w && w),
            (this.qrUrl = b.qrUrl);
          const S = this.getChainId(),
            T = (0, t.prepend0x)(S.toString(16));
          this.emit("connect", { chainIdStr: T });
          const k = this._storage.getItem(o.LOCAL_STORAGE_ADDRESSES_KEY);
          if (k) {
            const x = k.split(" ");
            "" !== x[0] &&
              ((this._addresses = x.map(($) => (0, t.ensureAddressString)($))),
              this.emit("accountsChanged", x));
          }
          this._subscriptionManager.events.on("notification", (x) => {
            this.emit("message", { type: x.method, data: x.params });
          }),
            this._isAuthorized() && this.initializeRelay(),
            window.addEventListener("message", (x) => {
              var $;
              if (
                x.origin === location.origin &&
                x.source === window &&
                "walletLinkMessage" === x.data.type &&
                "dappChainSwitched" === x.data.data.action
              ) {
                const re =
                  null !== ($ = x.data.data.jsonRpcUrl) && void 0 !== $
                    ? $
                    : this.jsonRpcUrl;
                this.updateProviderInfo(re, Number(x.data.data.chainId));
              }
            });
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get networkVersion() {
          return this.getChainId().toString(10);
        }
        get chainId() {
          return (0, t.prepend0x)(this.getChainId().toString(16));
        }
        get isWalletLink() {
          return !0;
        }
        get isMetaMask() {
          return this._overrideIsMetaMask;
        }
        get host() {
          return this.jsonRpcUrl;
        }
        get connected() {
          return !0;
        }
        isConnected() {
          return !0;
        }
        get jsonRpcUrl() {
          var b;
          return null !== (b = this._storage.getItem(y)) && void 0 !== b
            ? b
            : this._jsonRpcUrlFromOpts;
        }
        set jsonRpcUrl(b) {
          this._storage.setItem(y, b);
        }
        disableReloadOnDisconnect() {
          this.reloadOnDisconnect = !1;
        }
        setProviderInfo(b, E) {
          this.isCoinbaseBrowser ||
            ((this._chainIdFromOpts = E), (this._jsonRpcUrlFromOpts = b)),
            this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
        }
        updateProviderInfo(b, E) {
          this.jsonRpcUrl = b;
          const w = this.getChainId();
          this._storage.setItem(g, E.toString(10)),
            ((0, t.ensureIntNumber)(E) !== w ||
              !this.hasMadeFirstChainChangedEmission) &&
              (this.emit("chainChanged", this.getChainId()),
              (this.hasMadeFirstChainChangedEmission = !0));
        }
        watchAsset(b, E, w, S, T, k) {
          var x = this;
          return e(function* () {
            const G = yield (yield x.initializeRelay()).watchAsset(
              b,
              E,
              w,
              S,
              T,
              k?.toString()
            ).promise;
            return !(0, c.isErrorResponse)(G) && !!G.result;
          })();
        }
        addEthereumChain(b, E, w, S, T, k) {
          var x = this;
          return e(function* () {
            var $, G;
            if ((0, t.ensureIntNumber)(b) === x.getChainId()) return !1;
            const re = yield x.initializeRelay(),
              le = re.inlineAddEthereumChain(b.toString());
            !x._isAuthorized() &&
              !le &&
              (yield re.requestEthereumAccounts().promise);
            const Y = yield re.addEthereumChain(b.toString(), E, T, w, S, k)
              .promise;
            return (
              !(0, c.isErrorResponse)(Y) &&
              (!0 ===
                (null === ($ = Y.result) || void 0 === $
                  ? void 0
                  : $.isApproved) && x.updateProviderInfo(E[0], b),
              !0 ===
                (null === (G = Y.result) || void 0 === G
                  ? void 0
                  : G.isApproved))
            );
          })();
        }
        switchEthereumChain(b) {
          var E = this;
          return e(function* () {
            const S = yield (yield E.initializeRelay()).switchEthereumChain(
              b.toString(10),
              E.selectedAddress || void 0
            ).promise;
            if ((0, c.isErrorResponse)(S)) {
              if (!S.errorCode) return;
              throw S.errorCode ===
                h.standardErrorCodes.provider.unsupportedChain
                ? h.standardErrors.provider.unsupportedChain()
                : h.standardErrors.provider.custom({
                    message: S.errorMessage,
                    code: S.errorCode,
                  });
            }
            const T = S.result;
            T.isApproved &&
              T.rpcUrl.length > 0 &&
              E.updateProviderInfo(T.rpcUrl, b);
          })();
        }
        setAppInfo(b, E) {
          this.initializeRelay().then((w) => w.setAppInfo(b, E));
        }
        enable() {
          var b = this;
          return e(function* () {
            var E;
            return (
              null === (E = b.diagnostic) ||
                void 0 === E ||
                E.log(r.EVENTS.ETH_ACCOUNTS_STATE, {
                  method: "provider::enable",
                  addresses_length: b._addresses.length,
                  sessionIdHash: b._relay
                    ? l.Session.hash(b._relay.session.id)
                    : void 0,
                }),
              b._isAuthorized()
                ? [...b._addresses]
                : yield b.send("eth_requestAccounts")
            );
          })();
        }
        close() {
          var b = this;
          return e(function* () {
            (yield b.initializeRelay()).resetAndReload();
          })();
        }
        send(b, E) {
          try {
            const w = this._send(b, E);
            if (w instanceof Promise)
              return w.catch((S) => {
                throw (0, h.serializeError)(S, b);
              });
          } catch (w) {
            throw (0, h.serializeError)(w, b);
          }
        }
        _send(b, E) {
          if ("string" == typeof b) {
            const S = b,
              T = Array.isArray(E) ? E : void 0 !== E ? [E] : [];
            return this._sendRequestAsync({
              jsonrpc: "2.0",
              id: 0,
              method: S,
              params: T,
            }).then((x) => x.result);
          }
          return "function" == typeof E
            ? this._sendAsync(b, E)
            : Array.isArray(b)
            ? b.map((T) => this._sendRequest(T))
            : this._sendRequest(b);
        }
        sendAsync(b, E) {
          var w = this;
          return e(function* () {
            try {
              return w._sendAsync(b, E).catch((S) => {
                throw (0, h.serializeError)(S, b);
              });
            } catch (S) {
              return Promise.reject((0, h.serializeError)(S, b));
            }
          })();
        }
        _sendAsync(b, E) {
          var w = this;
          return e(function* () {
            if ("function" != typeof E) throw new Error("callback is required");
            if (Array.isArray(b)) {
              const T = E;
              return void w
                ._sendMultipleRequestsAsync(b)
                .then((k) => T(null, k))
                .catch((k) => T(k, null));
            }
            const S = E;
            return w
              ._sendRequestAsync(b)
              .then((T) => S(null, T))
              .catch((T) => S(T, null));
          })();
        }
        request(b) {
          var E = this;
          return e(function* () {
            try {
              return E._request(b).catch((w) => {
                throw (0, h.serializeError)(w, b.method);
              });
            } catch (w) {
              return Promise.reject((0, h.serializeError)(w, b.method));
            }
          })();
        }
        _request(b) {
          var E = this;
          return e(function* () {
            if (!b || "object" != typeof b || Array.isArray(b))
              throw h.standardErrors.rpc.invalidRequest({
                message: "Expected a single, non-array, object argument.",
                data: b,
              });
            const { method: w, params: S } = b;
            if ("string" != typeof w || 0 === w.length)
              throw h.standardErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: b,
              });
            if (
              void 0 !== S &&
              !Array.isArray(S) &&
              ("object" != typeof S || null === S)
            )
              throw h.standardErrors.rpc.invalidRequest({
                message:
                  "'args.params' must be an object or array if provided.",
                data: b,
              });
            const T = void 0 === S ? [] : S,
              k = E._relayEventManager.makeRequestId();
            return (yield E._sendRequestAsync({
              method: w,
              params: T,
              jsonrpc: "2.0",
              id: k,
            })).result;
          })();
        }
        scanQRCode(b) {
          var E = this;
          return e(function* () {
            const S = yield (yield E.initializeRelay()).scanQRCode(
              (0, t.ensureRegExpString)(b)
            ).promise;
            if ((0, c.isErrorResponse)(S))
              throw (0, h.serializeError)(S.errorMessage, "scanQRCode");
            if ("string" != typeof S.result)
              throw (0, h.serializeError)(
                "result was not a string",
                "scanQRCode"
              );
            return S.result;
          })();
        }
        genericRequest(b, E) {
          var w = this;
          return e(function* () {
            const T = yield (yield w.initializeRelay()).genericRequest(b, E)
              .promise;
            if ((0, c.isErrorResponse)(T))
              throw (0, h.serializeError)(T.errorMessage, "generic");
            if ("string" != typeof T.result)
              throw (0, h.serializeError)("result was not a string", "generic");
            return T.result;
          })();
        }
        connectAndSignIn(b) {
          var E = this;
          return e(function* () {
            var w;
            let S;
            null === (w = E.diagnostic) ||
              void 0 === w ||
              w.log(r.EVENTS.ETH_ACCOUNTS_STATE, {
                method: "provider::connectAndSignIn",
                sessionIdHash: E._relay
                  ? l.Session.hash(E._relay.session.id)
                  : void 0,
              });
            try {
              const k = yield E.initializeRelay();
              if (!(k instanceof i.MobileRelay))
                throw new Error("connectAndSignIn is only supported on mobile");
              if (
                ((S = yield k.connectAndSignIn(b).promise),
                (0, c.isErrorResponse)(S))
              )
                throw new Error(S.errorMessage);
            } catch (k) {
              throw "string" == typeof k.message &&
                k.message.match(/(denied|rejected)/i)
                ? h.standardErrors.provider.userRejectedRequest(
                    "User denied account authorization"
                  )
                : k;
            }
            if (!S.result) throw new Error("accounts received is empty");
            const { accounts: T } = S.result;
            return (
              E._setAddresses(T),
              E.isCoinbaseBrowser ||
                (yield E.switchEthereumChain(E.getChainId())),
              S.result
            );
          })();
        }
        selectProvider(b) {
          var E = this;
          return e(function* () {
            const S = yield (yield E.initializeRelay()).selectProvider(b)
              .promise;
            if ((0, c.isErrorResponse)(S))
              throw (0, h.serializeError)(S.errorMessage, "selectProvider");
            if ("string" != typeof S.result)
              throw (0, h.serializeError)(
                "result was not a string",
                "selectProvider"
              );
            return S.result;
          })();
        }
        supportsSubscriptions() {
          return !1;
        }
        subscribe() {
          throw new Error("Subscriptions are not supported");
        }
        unsubscribe() {
          throw new Error("Subscriptions are not supported");
        }
        disconnect() {
          return !0;
        }
        _sendRequest(b) {
          const E = { jsonrpc: "2.0", id: b.id },
            { method: w } = b;
          if (
            ((E.result = this._handleSynchronousMethods(b)),
            void 0 === E.result)
          )
            throw new Error(
              `Coinbase Wallet does not support calling ${w} synchronously without a callback. Please provide a callback parameter to call ${w} asynchronously.`
            );
          return E;
        }
        _setAddresses(b, E) {
          if (!Array.isArray(b)) throw new Error("addresses is not an array");
          const w = b.map((S) => (0, t.ensureAddressString)(S));
          JSON.stringify(w) !== JSON.stringify(this._addresses) &&
            ((this._addresses = w),
            this.emit("accountsChanged", this._addresses),
            this._storage.setItem(o.LOCAL_STORAGE_ADDRESSES_KEY, w.join(" ")));
        }
        _sendRequestAsync(b) {
          return new Promise((E, w) => {
            try {
              const S = this._handleSynchronousMethods(b);
              if (void 0 !== S)
                return E({ jsonrpc: "2.0", id: b.id, result: S });
              const T = this._handleAsynchronousFilterMethods(b);
              if (void 0 !== T)
                return void T.then((x) =>
                  E(Object.assign(Object.assign({}, x), { id: b.id }))
                ).catch((x) => w(x));
              const k = this._handleSubscriptionMethods(b);
              if (void 0 !== k)
                return void k
                  .then((x) =>
                    E({ jsonrpc: "2.0", id: b.id, result: x.result })
                  )
                  .catch((x) => w(x));
            } catch (S) {
              return w(S);
            }
            this._handleAsynchronousMethods(b)
              .then(
                (S) => S && E(Object.assign(Object.assign({}, S), { id: b.id }))
              )
              .catch((S) => w(S));
          });
        }
        _sendMultipleRequestsAsync(b) {
          return Promise.all(b.map((E) => this._sendRequestAsync(E)));
        }
        _handleSynchronousMethods(b) {
          const { method: E } = b,
            w = b.params || [];
          switch (E) {
            case "eth_accounts":
              return this._eth_accounts();
            case "eth_coinbase":
              return this._eth_coinbase();
            case "eth_uninstallFilter":
              return this._eth_uninstallFilter(w);
            case "net_version":
              return this._net_version();
            case "eth_chainId":
              return this._eth_chainId();
            default:
              return;
          }
        }
        _handleAsynchronousMethods(b) {
          var E = this;
          return e(function* () {
            const { method: w } = b,
              S = b.params || [];
            switch (w) {
              case "eth_requestAccounts":
                return E._eth_requestAccounts();
              case "eth_sign":
                return E._eth_sign(S);
              case "eth_ecRecover":
                return E._eth_ecRecover(S);
              case "personal_sign":
                return E._personal_sign(S);
              case "personal_ecRecover":
                return E._personal_ecRecover(S);
              case "eth_signTransaction":
                return E._eth_signTransaction(S);
              case "eth_sendRawTransaction":
                return E._eth_sendRawTransaction(S);
              case "eth_sendTransaction":
                return E._eth_sendTransaction(S);
              case "eth_signTypedData_v1":
                return E._eth_signTypedData_v1(S);
              case "eth_signTypedData_v2":
                return E._throwUnsupportedMethodError();
              case "eth_signTypedData_v3":
                return E._eth_signTypedData_v3(S);
              case "eth_signTypedData_v4":
              case "eth_signTypedData":
                return E._eth_signTypedData_v4(S);
              case "cbWallet_arbitrary":
                return E._cbwallet_arbitrary(S);
              case "wallet_addEthereumChain":
                return E._wallet_addEthereumChain(S);
              case "wallet_switchEthereumChain":
                return E._wallet_switchEthereumChain(S);
              case "wallet_watchAsset":
                return E._wallet_watchAsset(S);
            }
            return (yield E.initializeRelay())
              .makeEthereumJSONRPCRequest(b, E.jsonRpcUrl)
              .catch((k) => {
                var x;
                throw (
                  ((k.code === h.standardErrorCodes.rpc.methodNotFound ||
                    k.code === h.standardErrorCodes.rpc.methodNotSupported) &&
                    (null === (x = E.diagnostic) ||
                      void 0 === x ||
                      x.log(r.EVENTS.METHOD_NOT_IMPLEMENTED, {
                        method: b.method,
                        sessionIdHash: E._relay
                          ? l.Session.hash(E._relay.session.id)
                          : void 0,
                      })),
                  k)
                );
              });
          })();
        }
        _handleAsynchronousFilterMethods(b) {
          const { method: E } = b,
            w = b.params || [];
          switch (E) {
            case "eth_newFilter":
              return this._eth_newFilter(w);
            case "eth_newBlockFilter":
              return this._eth_newBlockFilter();
            case "eth_newPendingTransactionFilter":
              return this._eth_newPendingTransactionFilter();
            case "eth_getFilterChanges":
              return this._eth_getFilterChanges(w);
            case "eth_getFilterLogs":
              return this._eth_getFilterLogs(w);
          }
        }
        _handleSubscriptionMethods(b) {
          switch (b.method) {
            case "eth_subscribe":
            case "eth_unsubscribe":
              return this._subscriptionManager.handleRequest(b);
          }
        }
        _isKnownAddress(b) {
          try {
            const E = (0, t.ensureAddressString)(b);
            return this._addresses
              .map((S) => (0, t.ensureAddressString)(S))
              .includes(E);
          } catch {}
          return !1;
        }
        _ensureKnownAddress(b) {
          var E;
          if (!this._isKnownAddress(b))
            throw (
              (null === (E = this.diagnostic) ||
                void 0 === E ||
                E.log(r.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
              new Error("Unknown Ethereum address"))
            );
        }
        _prepareTransactionParams(b) {
          const E = b.from
            ? (0, t.ensureAddressString)(b.from)
            : this.selectedAddress;
          if (!E) throw new Error("Ethereum address is unavailable");
          return (
            this._ensureKnownAddress(E),
            {
              fromAddress: E,
              toAddress: b.to ? (0, t.ensureAddressString)(b.to) : null,
              weiValue:
                null != b.value ? (0, t.ensureBN)(b.value) : new u.default(0),
              data: b.data ? (0, t.ensureBuffer)(b.data) : Buffer.alloc(0),
              nonce: null != b.nonce ? (0, t.ensureIntNumber)(b.nonce) : null,
              gasPriceInWei:
                null != b.gasPrice ? (0, t.ensureBN)(b.gasPrice) : null,
              maxFeePerGas:
                null != b.maxFeePerGas ? (0, t.ensureBN)(b.maxFeePerGas) : null,
              maxPriorityFeePerGas:
                null != b.maxPriorityFeePerGas
                  ? (0, t.ensureBN)(b.maxPriorityFeePerGas)
                  : null,
              gasLimit: null != b.gas ? (0, t.ensureBN)(b.gas) : null,
              chainId: b.chainId
                ? (0, t.ensureIntNumber)(b.chainId)
                : this.getChainId(),
            }
          );
        }
        _isAuthorized() {
          return this._addresses.length > 0;
        }
        _requireAuthorization() {
          if (!this._isAuthorized())
            throw h.standardErrors.provider.unauthorized({});
        }
        _throwUnsupportedMethodError() {
          throw h.standardErrors.provider.unsupportedMethod({});
        }
        _signEthereumMessage(b, E, w, S) {
          var T = this;
          return e(function* () {
            T._ensureKnownAddress(E);
            try {
              const x = yield (yield T.initializeRelay()).signEthereumMessage(
                b,
                E,
                w,
                S
              ).promise;
              if ((0, c.isErrorResponse)(x)) throw new Error(x.errorMessage);
              return { jsonrpc: "2.0", id: 0, result: x.result };
            } catch (k) {
              throw "string" == typeof k.message &&
                k.message.match(/(denied|rejected)/i)
                ? h.standardErrors.provider.userRejectedRequest(
                    "User denied message signature"
                  )
                : k;
            }
          })();
        }
        _ethereumAddressFromSignedMessage(b, E, w) {
          var S = this;
          return e(function* () {
            const k =
              yield (yield S.initializeRelay()).ethereumAddressFromSignedMessage(
                b,
                E,
                w
              ).promise;
            if ((0, c.isErrorResponse)(k)) throw new Error(k.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: k.result };
          })();
        }
        _eth_accounts() {
          return [...this._addresses];
        }
        _eth_coinbase() {
          return this.selectedAddress || null;
        }
        _net_version() {
          return this.getChainId().toString(10);
        }
        _eth_chainId() {
          return (0, t.hexStringFromIntNumber)(this.getChainId());
        }
        getChainId() {
          const b = this._storage.getItem(g);
          if (!b) return (0, t.ensureIntNumber)(this._chainIdFromOpts);
          const E = parseInt(b, 10);
          return (0, t.ensureIntNumber)(E);
        }
        _eth_requestAccounts() {
          var b = this;
          return e(function* () {
            var E;
            if (
              (null === (E = b.diagnostic) ||
                void 0 === E ||
                E.log(r.EVENTS.ETH_ACCOUNTS_STATE, {
                  method: "provider::_eth_requestAccounts",
                  addresses_length: b._addresses.length,
                  sessionIdHash: b._relay
                    ? l.Session.hash(b._relay.session.id)
                    : void 0,
                }),
              b._isAuthorized())
            )
              return Promise.resolve({
                jsonrpc: "2.0",
                id: 0,
                result: b._addresses,
              });
            let w;
            try {
              if (
                ((w =
                  yield (yield b.initializeRelay()).requestEthereumAccounts()
                    .promise),
                (0, c.isErrorResponse)(w))
              )
                throw new Error(w.errorMessage);
            } catch (S) {
              throw "string" == typeof S.message &&
                S.message.match(/(denied|rejected)/i)
                ? h.standardErrors.provider.userRejectedRequest(
                    "User denied account authorization"
                  )
                : S;
            }
            if (!w.result) throw new Error("accounts received is empty");
            return (
              b._setAddresses(w.result),
              b.isCoinbaseBrowser ||
                (yield b.switchEthereumChain(b.getChainId())),
              { jsonrpc: "2.0", id: 0, result: b._addresses }
            );
          })();
        }
        _eth_sign(b) {
          this._requireAuthorization();
          const E = (0, t.ensureAddressString)(b[0]),
            w = (0, t.ensureBuffer)(b[1]);
          return this._signEthereumMessage(w, E, !1);
        }
        _eth_ecRecover(b) {
          const E = (0, t.ensureBuffer)(b[0]),
            w = (0, t.ensureBuffer)(b[1]);
          return this._ethereumAddressFromSignedMessage(E, w, !1);
        }
        _personal_sign(b) {
          this._requireAuthorization();
          const E = (0, t.ensureBuffer)(b[0]),
            w = (0, t.ensureAddressString)(b[1]);
          return this._signEthereumMessage(E, w, !0);
        }
        _personal_ecRecover(b) {
          const E = (0, t.ensureBuffer)(b[0]),
            w = (0, t.ensureBuffer)(b[1]);
          return this._ethereumAddressFromSignedMessage(E, w, !0);
        }
        _eth_signTransaction(b) {
          var E = this;
          return e(function* () {
            E._requireAuthorization();
            const w = E._prepareTransactionParams(b[0] || {});
            try {
              const T =
                yield (yield E.initializeRelay()).signEthereumTransaction(w)
                  .promise;
              if ((0, c.isErrorResponse)(T)) throw new Error(T.errorMessage);
              return { jsonrpc: "2.0", id: 0, result: T.result };
            } catch (S) {
              throw "string" == typeof S.message &&
                S.message.match(/(denied|rejected)/i)
                ? h.standardErrors.provider.userRejectedRequest(
                    "User denied transaction signature"
                  )
                : S;
            }
          })();
        }
        _eth_sendRawTransaction(b) {
          var E = this;
          return e(function* () {
            const w = (0, t.ensureBuffer)(b[0]),
              T = yield (yield E.initializeRelay()).submitEthereumTransaction(
                w,
                E.getChainId()
              ).promise;
            if ((0, c.isErrorResponse)(T)) throw new Error(T.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: T.result };
          })();
        }
        _eth_sendTransaction(b) {
          var E = this;
          return e(function* () {
            E._requireAuthorization();
            const w = E._prepareTransactionParams(b[0] || {});
            try {
              const T =
                yield (yield E.initializeRelay()).signAndSubmitEthereumTransaction(
                  w
                ).promise;
              if ((0, c.isErrorResponse)(T)) throw new Error(T.errorMessage);
              return { jsonrpc: "2.0", id: 0, result: T.result };
            } catch (S) {
              throw "string" == typeof S.message &&
                S.message.match(/(denied|rejected)/i)
                ? h.standardErrors.provider.userRejectedRequest(
                    "User denied transaction signature"
                  )
                : S;
            }
          })();
        }
        _eth_signTypedData_v1(b) {
          var E = this;
          return e(function* () {
            E._requireAuthorization();
            const w = (0, t.ensureParsedJSONObject)(b[0]),
              S = (0, t.ensureAddressString)(b[1]);
            E._ensureKnownAddress(S);
            const T = p.default.hashForSignTypedDataLegacy({ data: w }),
              k = JSON.stringify(w, null, 2);
            return E._signEthereumMessage(T, S, !1, k);
          })();
        }
        _eth_signTypedData_v3(b) {
          var E = this;
          return e(function* () {
            E._requireAuthorization();
            const w = (0, t.ensureAddressString)(b[0]),
              S = (0, t.ensureParsedJSONObject)(b[1]);
            E._ensureKnownAddress(w);
            const T = p.default.hashForSignTypedData_v3({ data: S }),
              k = JSON.stringify(S, null, 2);
            return E._signEthereumMessage(T, w, !1, k);
          })();
        }
        _eth_signTypedData_v4(b) {
          var E = this;
          return e(function* () {
            E._requireAuthorization();
            const w = (0, t.ensureAddressString)(b[0]),
              S = (0, t.ensureParsedJSONObject)(b[1]);
            E._ensureKnownAddress(w);
            const T = p.default.hashForSignTypedData_v4({ data: S }),
              k = JSON.stringify(S, null, 2);
            return E._signEthereumMessage(T, w, !1, k);
          })();
        }
        _cbwallet_arbitrary(b) {
          var E = this;
          return e(function* () {
            const w = b[0],
              S = b[1];
            if ("string" != typeof S)
              throw new Error("parameter must be a string");
            if ("object" != typeof w || null === w)
              throw new Error("parameter must be an object");
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield E.genericRequest(w, S),
            };
          })();
        }
        _wallet_addEthereumChain(b) {
          var E = this;
          return e(function* () {
            var w, S, T, k;
            const x = b[0];
            if (
              0 ===
              (null === (w = x.rpcUrls) || void 0 === w ? void 0 : w.length)
            )
              return {
                jsonrpc: "2.0",
                id: 0,
                error: { code: 2, message: "please pass in at least 1 rpcUrl" },
              };
            if (!x.chainName || "" === x.chainName.trim())
              throw h.standardErrors.rpc.invalidParams(
                "chainName is a required field"
              );
            if (!x.nativeCurrency)
              throw h.standardErrors.rpc.invalidParams(
                "nativeCurrency is a required field"
              );
            const $ = parseInt(x.chainId, 16);
            return (yield E.addEthereumChain(
              $,
              null !== (S = x.rpcUrls) && void 0 !== S ? S : [],
              null !== (T = x.blockExplorerUrls) && void 0 !== T ? T : [],
              x.chainName,
              null !== (k = x.iconUrls) && void 0 !== k ? k : [],
              x.nativeCurrency
            ))
              ? { jsonrpc: "2.0", id: 0, result: null }
              : {
                  jsonrpc: "2.0",
                  id: 0,
                  error: { code: 2, message: "unable to add ethereum chain" },
                };
          })();
        }
        _wallet_switchEthereumChain(b) {
          var E = this;
          return e(function* () {
            const w = b[0];
            return (
              yield E.switchEthereumChain(parseInt(w.chainId, 16)),
              { jsonrpc: "2.0", id: 0, result: null }
            );
          })();
        }
        _wallet_watchAsset(b) {
          var E = this;
          return e(function* () {
            const w = Array.isArray(b) ? b[0] : b;
            if (!w.type)
              throw h.standardErrors.rpc.invalidParams("Type is required");
            if ("ERC20" !== w?.type)
              throw h.standardErrors.rpc.invalidParams(
                `Asset of type '${w.type}' is not supported`
              );
            if (!w?.options)
              throw h.standardErrors.rpc.invalidParams("Options are required");
            if (!w?.options.address)
              throw h.standardErrors.rpc.invalidParams("Address is required");
            const S = E.getChainId(),
              { address: T, symbol: k, image: x, decimals: $ } = w.options;
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield E.watchAsset(w.type, T, k, $, x, S),
            };
          })();
        }
        _eth_uninstallFilter(b) {
          const E = (0, t.ensureHexString)(b[0]);
          return this._filterPolyfill.uninstallFilter(E);
        }
        _eth_newFilter(b) {
          var E = this;
          return e(function* () {
            const w = b[0];
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield E._filterPolyfill.newFilter(w),
            };
          })();
        }
        _eth_newBlockFilter() {
          var b = this;
          return e(function* () {
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield b._filterPolyfill.newBlockFilter(),
            };
          })();
        }
        _eth_newPendingTransactionFilter() {
          var b = this;
          return e(function* () {
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield b._filterPolyfill.newPendingTransactionFilter(),
            };
          })();
        }
        _eth_getFilterChanges(b) {
          const E = (0, t.ensureHexString)(b[0]);
          return this._filterPolyfill.getFilterChanges(E);
        }
        _eth_getFilterLogs(b) {
          const E = (0, t.ensureHexString)(b[0]);
          return this._filterPolyfill.getFilterLogs(E);
        }
        initializeRelay() {
          return this._relay
            ? Promise.resolve(this._relay)
            : this._relayProvider().then(
                (b) => (
                  b.setAccountsCallback((E, w) => this._setAddresses(E, w)),
                  b.setChainCallback((E, w) => {
                    this.updateProviderInfo(w, parseInt(E, 10));
                  }),
                  b.setDappDefaultChainCallback(this._chainIdFromOpts),
                  (this._relay = b),
                  b
                )
              );
        }
      };
    },
    6480: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.EVENTS = void 0),
        (s.EVENTS = {
          STARTED_CONNECTING: "walletlink_sdk.started.connecting",
          CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
          DISCONNECTED: "walletlink_sdk.disconnected",
          METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
          LINKED: "walletlink_sdk.linked",
          FAILURE: "walletlink_sdk.generic_failure",
          SESSION_CONFIG_RECEIVED:
            "walletlink_sdk.session_config_event_received",
          ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
          SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
          UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
          SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
          GENERAL_ERROR: "walletlink_sdk.general_error",
          WEB3_REQUEST: "walletlink_sdk.web3.request",
          WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
          WEB3_RESPONSE: "walletlink_sdk.web3.response",
          METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
          UNKNOWN_ADDRESS_ENCOUNTERED:
            "walletlink_sdk.unknown_address_encountered",
        });
    },
    4016: (I, s, d) => {
      "use strict";
      var e = d(7156).default;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.filterFromParam = s.FilterPolyfill = void 0);
      const m = d(8737),
        u = d(2329),
        h = { jsonrpc: "2.0", id: 0 };
      function i(n) {
        return {
          fromBlock: l(n.fromBlock),
          toBlock: l(n.toBlock),
          addresses:
            void 0 === n.address
              ? null
              : Array.isArray(n.address)
              ? n.address
              : [n.address],
          topics: n.topics || [],
        };
      }
      function o(n) {
        const a = {
          fromBlock: c(n.fromBlock),
          toBlock: c(n.toBlock),
          topics: n.topics,
        };
        return null !== n.addresses && (a.address = n.addresses), a;
      }
      function l(n) {
        if (void 0 === n || "latest" === n || "pending" === n) return "latest";
        if ("earliest" === n) return (0, m.IntNumber)(0);
        if ((0, u.isHexString)(n)) return (0, u.intNumberFromHexString)(n);
        throw new Error(`Invalid block option: ${String(n)}`);
      }
      function c(n) {
        return "latest" === n ? n : (0, u.hexStringFromIntNumber)(n);
      }
      function p() {
        return Object.assign(Object.assign({}, h), {
          error: { code: -32e3, message: "filter not found" },
        });
      }
      function r() {
        return Object.assign(Object.assign({}, h), { result: [] });
      }
      (s.FilterPolyfill = class t {
        constructor(a) {
          (this.logFilters = new Map()),
            (this.blockFilters = new Set()),
            (this.pendingTransactionFilters = new Set()),
            (this.cursors = new Map()),
            (this.timeouts = new Map()),
            (this.nextFilterId = (0, m.IntNumber)(1)),
            (this.REQUEST_THROTTLE_INTERVAL = 1e3),
            (this.lastFetchTimestamp = new Date(0)),
            (this.resolvers = []),
            (this.provider = a);
        }
        newFilter(a) {
          var g = this;
          return e(function* () {
            const y = i(a),
              _ = g.makeFilterId(),
              v = yield g.setInitialCursorPosition(_, y.fromBlock);
            return (
              console.info(
                `Installing new log filter(${_}):`,
                y,
                "initial cursor position:",
                v
              ),
              g.logFilters.set(_, y),
              g.setFilterTimeout(_),
              (0, u.hexStringFromIntNumber)(_)
            );
          })();
        }
        newBlockFilter() {
          var a = this;
          return e(function* () {
            const g = a.makeFilterId(),
              y = yield a.setInitialCursorPosition(g, "latest");
            return (
              console.info(
                `Installing new block filter (${g}) with initial cursor position:`,
                y
              ),
              a.blockFilters.add(g),
              a.setFilterTimeout(g),
              (0, u.hexStringFromIntNumber)(g)
            );
          })();
        }
        newPendingTransactionFilter() {
          var a = this;
          return e(function* () {
            const g = a.makeFilterId(),
              y = yield a.setInitialCursorPosition(g, "latest");
            return (
              console.info(
                `Installing new block filter (${g}) with initial cursor position:`,
                y
              ),
              a.pendingTransactionFilters.add(g),
              a.setFilterTimeout(g),
              (0, u.hexStringFromIntNumber)(g)
            );
          })();
        }
        uninstallFilter(a) {
          const g = (0, u.intNumberFromHexString)(a);
          return (
            console.info(`Uninstalling filter (${g})`), this.deleteFilter(g), !0
          );
        }
        getFilterChanges(a) {
          const g = (0, u.intNumberFromHexString)(a);
          return (
            this.timeouts.has(g) && this.setFilterTimeout(g),
            this.logFilters.has(g)
              ? this.getLogFilterChanges(g)
              : this.blockFilters.has(g)
              ? this.getBlockFilterChanges(g)
              : this.pendingTransactionFilters.has(g)
              ? this.getPendingTransactionFilterChanges(g)
              : Promise.resolve(p())
          );
        }
        getFilterLogs(a) {
          var g = this;
          return e(function* () {
            const y = (0, u.intNumberFromHexString)(a),
              _ = g.logFilters.get(y);
            return _
              ? g.sendAsyncPromise(
                  Object.assign(Object.assign({}, h), {
                    method: "eth_getLogs",
                    params: [o(_)],
                  })
                )
              : p();
          })();
        }
        makeFilterId() {
          return (0, m.IntNumber)(++this.nextFilterId);
        }
        sendAsyncPromise(a) {
          return new Promise((g, y) => {
            this.provider.sendAsync(a, (_, v) =>
              _
                ? y(_)
                : Array.isArray(v) || null == v
                ? y(
                    new Error(
                      `unexpected response received: ${JSON.stringify(v)}`
                    )
                  )
                : void g(v)
            );
          });
        }
        deleteFilter(a) {
          console.info(`Deleting filter (${a})`),
            this.logFilters.delete(a),
            this.blockFilters.delete(a),
            this.pendingTransactionFilters.delete(a),
            this.cursors.delete(a),
            this.timeouts.delete(a);
        }
        getLogFilterChanges(a) {
          var g = this;
          return e(function* () {
            const y = g.logFilters.get(a),
              _ = g.cursors.get(a);
            if (!_ || !y) return p();
            const v = yield g.getCurrentBlockHeight(),
              b = "latest" === y.toBlock ? v : y.toBlock;
            if (_ > v || _ > Number(y.toBlock)) return r();
            console.info(`Fetching logs from ${_} to ${b} for filter ${a}`);
            const E = yield g.sendAsyncPromise(
              Object.assign(Object.assign({}, h), {
                method: "eth_getLogs",
                params: [
                  o(
                    Object.assign(Object.assign({}, y), {
                      fromBlock: _,
                      toBlock: b,
                    })
                  ),
                ],
              })
            );
            if (Array.isArray(E.result)) {
              const w = E.result.map((T) =>
                  (0, u.intNumberFromHexString)(T.blockNumber || "0x0")
                ),
                S = Math.max(...w);
              if (S && S > _) {
                const T = (0, m.IntNumber)(S + 1);
                console.info(
                  `Moving cursor position for filter (${a}) from ${_} to ${T}`
                ),
                  g.cursors.set(a, T);
              }
            }
            return E;
          })();
        }
        getBlockFilterChanges(a) {
          var g = this;
          return e(function* () {
            const y = g.cursors.get(a);
            if (!y) return p();
            const _ = yield g.getCurrentBlockHeight();
            if (y > _) return r();
            console.info(`Fetching blocks from ${y} to ${_} for filter (${a})`);
            const v = (yield Promise.all(
                (0, u.range)(y, _ + 1).map((E) =>
                  g.getBlockHashByNumber((0, m.IntNumber)(E))
                )
              )).filter((E) => !!E),
              b = (0, m.IntNumber)(y + v.length);
            return (
              console.info(
                `Moving cursor position for filter (${a}) from ${y} to ${b}`
              ),
              g.cursors.set(a, b),
              Object.assign(Object.assign({}, h), { result: v })
            );
          })();
        }
        getPendingTransactionFilterChanges(a) {
          return e(function* () {
            return Promise.resolve(r());
          })();
        }
        setInitialCursorPosition(a, g) {
          var y = this;
          return e(function* () {
            const _ = yield y.getCurrentBlockHeight(),
              v = "number" == typeof g && g > _ ? g : _;
            return y.cursors.set(a, v), v;
          })();
        }
        setFilterTimeout(a) {
          const g = this.timeouts.get(a);
          g && window.clearTimeout(g);
          const y = window.setTimeout(() => {
            console.info(`Filter (${a}) timed out`), this.deleteFilter(a);
          }, 3e5);
          this.timeouts.set(a, y);
        }
        getCurrentBlockHeight() {
          var a = this;
          return e(function* () {
            const g = new Date();
            if (
              g.getTime() - a.lastFetchTimestamp.getTime() >
              a.REQUEST_THROTTLE_INTERVAL
            ) {
              a.lastFetchTimestamp = g;
              const y = yield a._getCurrentBlockHeight();
              (a.currentBlockHeight = y),
                a.resolvers.forEach((_) => _(y)),
                (a.resolvers = []);
            }
            return a.currentBlockHeight
              ? a.currentBlockHeight
              : new Promise((y) => a.resolvers.push(y));
          })();
        }
        _getCurrentBlockHeight() {
          var a = this;
          return e(function* () {
            const { result: g } = yield a.sendAsyncPromise(
              Object.assign(Object.assign({}, h), {
                method: "eth_blockNumber",
                params: [],
              })
            );
            return (0, u.intNumberFromHexString)((0, u.ensureHexString)(g));
          })();
        }
        getBlockHashByNumber(a) {
          var g = this;
          return e(function* () {
            const y = yield g.sendAsyncPromise(
              Object.assign(Object.assign({}, h), {
                method: "eth_getBlockByNumber",
                params: [(0, u.hexStringFromIntNumber)(a), !1],
              })
            );
            return y.result && "string" == typeof y.result.hash
              ? (0, u.ensureHexString)(y.result.hash)
              : null;
          })();
        }
      }),
        (s.filterFromParam = i);
    },
    2506: (I, s, d) => {
      "use strict";
      var e = d(7156).default;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.SubscriptionManager = void 0);
      const m = d(1496),
        u = d(4035),
        f = () => {};
      s.SubscriptionManager = class h {
        constructor(i) {
          const o = new m.PollingBlockTracker({
              provider: i,
              pollingInterval: 15e3,
              setSkipCacheFlag: !0,
            }),
            { events: l, middleware: c } = u({ blockTracker: o, provider: i });
          (this.events = l), (this.subscriptionMiddleware = c);
        }
        handleRequest(i) {
          var o = this;
          return e(function* () {
            const l = {};
            return yield o.subscriptionMiddleware(i, l, f, f), l;
          })();
        }
        destroy() {
          this.subscriptionMiddleware.destroy();
        }
      };
    },
    8561: (I, s, d) => {
      "use strict";
      var e = d(7156).default;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.RelayAbstract =
          s.APP_VERSION_KEY =
          s.LOCAL_STORAGE_ADDRESSES_KEY =
          s.WALLET_USER_NAME_KEY =
            void 0);
      const m = d(3311);
      (s.WALLET_USER_NAME_KEY = "walletUsername"),
        (s.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses"),
        (s.APP_VERSION_KEY = "AppVersion"),
        (s.RelayAbstract = class u {
          makeEthereumJSONRPCRequest(h, t) {
            return e(function* () {
              if (!t) throw new Error("Error: No jsonRpcUrl provided");
              return window
                .fetch(t, {
                  method: "POST",
                  body: JSON.stringify(h),
                  mode: "cors",
                  headers: { "Content-Type": "application/json" },
                })
                .then((i) => i.json())
                .then((i) => {
                  if (!i) throw m.standardErrors.rpc.parse({});
                  const o = i,
                    { error: l } = o;
                  if (l) throw (0, m.serializeError)(l, h.method);
                  return o;
                });
            })();
          }
        });
    },
    3483: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.RelayEventManager = void 0);
      const e = d(2329);
      s.RelayEventManager = class m {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          const f = this._nextRequestId,
            h = (0, e.prepend0x)(f.toString(16));
          return this.callbacks.get(h) && this.callbacks.delete(h), f;
        }
      };
    },
    6293: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.Session = void 0);
      const e = d(7965),
        m = d(2329),
        u = "session:id",
        f = "session:secret",
        h = "session:linked";
      class t {
        constructor(o, l, c, p) {
          (this._storage = o),
            (this._id = l || (0, m.randomBytesHex)(16)),
            (this._secret = c || (0, m.randomBytesHex)(32)),
            (this._key = new e.sha256()
              .update(`${this._id}, ${this._secret} WalletLink`)
              .digest("hex")),
            (this._linked = !!p);
        }
        static load(o) {
          const l = o.getItem(u),
            c = o.getItem(h),
            p = o.getItem(f);
          return l && p ? new t(o, l, p, "1" === c) : null;
        }
        static hash(o) {
          return new e.sha256().update(o).digest("hex");
        }
        get id() {
          return this._id;
        }
        get secret() {
          return this._secret;
        }
        get key() {
          return this._key;
        }
        get linked() {
          return this._linked;
        }
        set linked(o) {
          (this._linked = o), this.persistLinked();
        }
        save() {
          return (
            this._storage.setItem(u, this._id),
            this._storage.setItem(f, this._secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this._storage.setItem(h, this._linked ? "1" : "0");
        }
      }
      s.Session = t;
    },
    2163: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.MobileRelay = void 0);
      const e = d(2329),
        m = d(4587),
        u = d(5129);
      s.MobileRelay = class f extends m.WalletLinkRelay {
        constructor(t) {
          var i;
          super(t),
            (this._enableMobileWalletLink =
              null !== (i = t.enableMobileWalletLink) && void 0 !== i && i);
        }
        requestEthereumAccounts() {
          return this._enableMobileWalletLink
            ? super.requestEthereumAccounts()
            : {
                promise: new Promise(() => {
                  const t = (0, e.getLocation)();
                  t.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(
                    t.href
                  )}`;
                }),
                cancel: () => {},
              };
        }
        publishWeb3RequestEvent(t, i) {
          if (
            (super.publishWeb3RequestEvent(t, i),
            !(
              this._enableMobileWalletLink && this.ui instanceof u.MobileRelayUI
            ))
          )
            return;
          let o = !1;
          switch (i.method) {
            case "requestEthereumAccounts":
            case "connectAndSignIn":
              (o = !0), this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
              break;
            case "switchEthereumChain":
              return;
            default:
              (o = !0), this.ui.openCoinbaseWalletDeeplink();
          }
          o &&
            window.addEventListener(
              "blur",
              () => {
                window.addEventListener(
                  "focus",
                  () => {
                    this.connection.checkUnseenEvents();
                  },
                  { once: !0 }
                );
              },
              { once: !0 }
            );
        }
        handleWeb3ResponseMessage(t) {
          super.handleWeb3ResponseMessage(t);
        }
        connectAndSignIn(t) {
          if (!this._enableMobileWalletLink)
            throw new Error(
              "connectAndSignIn is supported only when enableMobileWalletLink is on"
            );
          return this.sendRequest({
            method: "connectAndSignIn",
            params: {
              appName: this.appName,
              appLogoUrl: this.appLogoUrl,
              domain: window.location.hostname,
              aud: window.location.href,
              version: "1",
              type: "eip4361",
              nonce: t.nonce,
              iat: new Date().toISOString(),
              chainId: `eip155:${this.dappDefaultChain}`,
              statement: t.statement,
              resources: t.resources,
            },
          });
        }
      };
    },
    5129: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.MobileRelayUI = void 0);
      const e = d(8669);
      s.MobileRelayUI = class m {
        constructor(f) {
          (this.attached = !1),
            (this.darkMode = !1),
            (this.redirectDialog = new e.RedirectDialog()),
            (this.darkMode = f.darkMode);
        }
        attach() {
          if (this.attached)
            throw new Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        setConnected(f) {}
        redirectToCoinbaseWallet(f) {
          const h = new URL("https://go.cb-w.com/walletlink");
          h.searchParams.append("redirect_url", window.location.href),
            f && h.searchParams.append("wl_url", f);
          const t = document.createElement("a");
          (t.target = "cbw-opener"),
            (t.href = h.href),
            (t.rel = "noreferrer noopener"),
            t.click();
        }
        openCoinbaseWalletDeeplink(f) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            darkMode: this.darkMode,
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(f);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(f);
            }, 99);
        }
        showConnecting(f) {
          return () => {
            this.redirectDialog.clear();
          };
        }
        hideRequestEthereumAccounts() {
          this.redirectDialog.clear();
        }
        requestEthereumAccounts() {}
        addEthereumChain() {}
        watchAsset() {}
        selectProvider() {}
        switchEthereumChain() {}
        signEthereumMessage() {}
        signEthereumTransaction() {}
        submitEthereumTransaction() {}
        ethereumAddressFromSignedMessage() {}
        reloadUI() {}
        setStandalone() {}
        setConnectDisabled() {}
        inlineAccountsResponse() {
          return !1;
        }
        inlineAddEthereumChain() {
          return !1;
        }
        inlineWatchAsset() {
          return !1;
        }
        inlineSwitchEthereumChain() {
          return !1;
        }
        isStandalone() {
          return !1;
        }
      };
    },
    4587: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.WalletLinkRelay = void 0);
      const e = d(3311),
        m = d(8737),
        u = d(2329),
        f = d(6480),
        h = d(8561),
        t = d(6293),
        i = d(7547),
        o = d(8315),
        l = d(7144);
      class c extends h.RelayAbstract {
        constructor(r) {
          var n;
          super(),
            (this.accountsCallback = null),
            (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.chainCallback = null),
            (this.dappDefaultChain = 1),
            (this.appName = ""),
            (this.appLogoUrl = null),
            (this.linkedUpdated = (_) => {
              var v;
              this.isLinked = _;
              const b = this.storage.getItem(h.LOCAL_STORAGE_ADDRESSES_KEY);
              if (
                (_ && (this.session.linked = _),
                (this.isUnlinkedErrorState = !1),
                b)
              ) {
                const E = b.split(" "),
                  w = "true" === this.storage.getItem("IsStandaloneSigning");
                if ("" !== E[0] && !_ && this.session.linked && !w) {
                  this.isUnlinkedErrorState = !0;
                  const S = this.getSessionIdHash();
                  null === (v = this.diagnostic) ||
                    void 0 === v ||
                    v.log(f.EVENTS.UNLINKED_ERROR_STATE, { sessionIdHash: S });
                }
              }
            }),
            (this.metadataUpdated = (_, v) => {
              this.storage.setItem(_, v);
            }),
            (this.chainUpdated = (_, v) => {
              (this.chainCallbackParams.chainId === _ &&
                this.chainCallbackParams.jsonRpcUrl === v) ||
                ((this.chainCallbackParams = { chainId: _, jsonRpcUrl: v }),
                this.chainCallback && this.chainCallback(_, v));
            }),
            (this.accountUpdated = (_) => {
              this.accountsCallback && this.accountsCallback([_]),
                c.accountRequestCallbackIds.size > 0 &&
                  (Array.from(c.accountRequestCallbackIds.values()).forEach(
                    (v) => {
                      this.invokeCallback(
                        Object.assign(
                          Object.assign(
                            {},
                            {
                              type: "WEB3_RESPONSE",
                              id: v,
                              response: {
                                method: "requestEthereumAccounts",
                                result: [_],
                              },
                            }
                          ),
                          { id: v }
                        )
                      );
                    }
                  ),
                  c.accountRequestCallbackIds.clear());
            }),
            (this.connectedUpdated = (_) => {
              this.ui.setConnected(_);
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = r.linkAPIUrl),
            (this.storage = r.storage),
            (this.options = r);
          const { session: a, ui: g, connection: y } = this.subscribe();
          (this._session = a),
            (this.connection = y),
            (this.relayEventManager = r.relayEventManager),
            (this.diagnostic = r.diagnosticLogger),
            (this._reloadOnDisconnect =
              null === (n = r.reloadOnDisconnect) || void 0 === n || n),
            (this.ui = g);
        }
        subscribe() {
          const r =
              t.Session.load(this.storage) ||
              new t.Session(this.storage).save(),
            { linkAPIUrl: n, diagnostic: a } = this,
            g = new i.WalletLinkConnection({
              session: r,
              linkAPIUrl: n,
              diagnostic: a,
              listener: this,
            }),
            { version: y, darkMode: _ } = this.options,
            v = this.options.uiConstructor({
              linkAPIUrl: n,
              version: y,
              darkMode: _,
              session: r,
            });
          return g.connect(), { session: r, ui: v, connection: g };
        }
        attachUI() {
          this.ui.attach();
        }
        resetAndReload() {
          Promise.race([
            this.connection.setSessionMetadata("__destroyed", "1"),
            new Promise((r) => setTimeout(() => r(null), 1e3)),
          ])
            .then(() => {
              var r, n;
              const a = this.ui.isStandalone();
              null === (r = this.diagnostic) ||
                void 0 === r ||
                r.log(f.EVENTS.SESSION_STATE_CHANGE, {
                  method: "relay::resetAndReload",
                  sessionMetadataChange: "__destroyed, 1",
                  sessionIdHash: this.getSessionIdHash(),
                }),
                this.connection.destroy();
              const g = t.Session.load(this.storage);
              if (
                (g?.id === this._session.id
                  ? this.storage.clear()
                  : g &&
                    (null === (n = this.diagnostic) ||
                      void 0 === n ||
                      n.log(f.EVENTS.SKIPPED_CLEARING_SESSION, {
                        sessionIdHash: this.getSessionIdHash(),
                        storedSessionIdHash: t.Session.hash(g.id),
                      })),
                this._reloadOnDisconnect)
              )
                return void this.ui.reloadUI();
              this.accountsCallback && this.accountsCallback([], !0);
              const { session: y, ui: _, connection: v } = this.subscribe();
              (this._session = y),
                (this.connection = v),
                (this.ui = _),
                a && this.ui.setStandalone && this.ui.setStandalone(!0),
                this.options.headlessMode || this.attachUI();
            })
            .catch((r) => {
              var n;
              null === (n = this.diagnostic) ||
                void 0 === n ||
                n.log(f.EVENTS.FAILURE, {
                  method: "relay::resetAndReload",
                  message: `failed to reset and reload with ${r}`,
                  sessionIdHash: this.getSessionIdHash(),
                });
            });
        }
        setAppInfo(r, n) {
          (this.appName = r), (this.appLogoUrl = n);
        }
        getStorageItem(r) {
          return this.storage.getItem(r);
        }
        get session() {
          return this._session;
        }
        setStorageItem(r, n) {
          this.storage.setItem(r, n);
        }
        signEthereumMessage(r, n, a, g) {
          return this.sendRequest({
            method: "signEthereumMessage",
            params: {
              message: (0, u.hexStringFromBuffer)(r, !0),
              address: n,
              addPrefix: a,
              typedDataJson: g || null,
            },
          });
        }
        ethereumAddressFromSignedMessage(r, n, a) {
          return this.sendRequest({
            method: "ethereumAddressFromSignedMessage",
            params: {
              message: (0, u.hexStringFromBuffer)(r, !0),
              signature: (0, u.hexStringFromBuffer)(n, !0),
              addPrefix: a,
            },
          });
        }
        signEthereumTransaction(r) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: r.fromAddress,
              toAddress: r.toAddress,
              weiValue: (0, u.bigIntStringFromBN)(r.weiValue),
              data: (0, u.hexStringFromBuffer)(r.data, !0),
              nonce: r.nonce,
              gasPriceInWei: r.gasPriceInWei
                ? (0, u.bigIntStringFromBN)(r.gasPriceInWei)
                : null,
              maxFeePerGas: r.gasPriceInWei
                ? (0, u.bigIntStringFromBN)(r.gasPriceInWei)
                : null,
              maxPriorityFeePerGas: r.gasPriceInWei
                ? (0, u.bigIntStringFromBN)(r.gasPriceInWei)
                : null,
              gasLimit: r.gasLimit
                ? (0, u.bigIntStringFromBN)(r.gasLimit)
                : null,
              chainId: r.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(r) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: r.fromAddress,
              toAddress: r.toAddress,
              weiValue: (0, u.bigIntStringFromBN)(r.weiValue),
              data: (0, u.hexStringFromBuffer)(r.data, !0),
              nonce: r.nonce,
              gasPriceInWei: r.gasPriceInWei
                ? (0, u.bigIntStringFromBN)(r.gasPriceInWei)
                : null,
              maxFeePerGas: r.maxFeePerGas
                ? (0, u.bigIntStringFromBN)(r.maxFeePerGas)
                : null,
              maxPriorityFeePerGas: r.maxPriorityFeePerGas
                ? (0, u.bigIntStringFromBN)(r.maxPriorityFeePerGas)
                : null,
              gasLimit: r.gasLimit
                ? (0, u.bigIntStringFromBN)(r.gasLimit)
                : null,
              chainId: r.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(r, n) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
              signedTransaction: (0, u.hexStringFromBuffer)(r, !0),
              chainId: n,
            },
          });
        }
        scanQRCode(r) {
          return this.sendRequest({
            method: "scanQRCode",
            params: { regExp: r },
          });
        }
        getQRCodeUrl() {
          return (0, u.createQrUrl)(
            this._session.id,
            this._session.secret,
            this.linkAPIUrl,
            !1,
            this.options.version,
            this.dappDefaultChain
          );
        }
        genericRequest(r, n) {
          return this.sendRequest({
            method: "generic",
            params: { action: n, data: r },
          });
        }
        sendGenericMessage(r) {
          return this.sendRequest(r);
        }
        sendRequest(r) {
          let n = null;
          const a = (0, u.randomBytesHex)(8),
            g = (_) => {
              this.publishWeb3RequestCanceledEvent(a),
                this.handleErrorResponse(a, r.method, _),
                n?.();
            };
          return {
            promise: new Promise((_, v) => {
              this.ui.isStandalone() ||
                (n = this.ui.showConnecting({
                  isUnlinkedErrorState: this.isUnlinkedErrorState,
                  onCancel: g,
                  onResetConnection: this.resetAndReload,
                })),
                this.relayEventManager.callbacks.set(a, (b) => {
                  if ((n?.(), (0, o.isErrorResponse)(b)))
                    return v(new Error(b.errorMessage));
                  _(b);
                }),
                this.ui.isStandalone()
                  ? this.sendRequestStandalone(a, r)
                  : this.publishWeb3RequestEvent(a, r);
            }),
            cancel: g,
          };
        }
        setConnectDisabled(r) {
          this.ui.setConnectDisabled(r);
        }
        setAccountsCallback(r) {
          this.accountsCallback = r;
        }
        setChainCallback(r) {
          this.chainCallback = r;
        }
        setDappDefaultChainCallback(r) {
          (this.dappDefaultChain = r),
            this.ui instanceof l.WalletLinkRelayUI && this.ui.setChainId(r);
        }
        publishWeb3RequestEvent(r, n) {
          var a;
          const g = { type: "WEB3_REQUEST", id: r, request: n },
            y = t.Session.load(this.storage);
          null === (a = this.diagnostic) ||
            void 0 === a ||
            a.log(f.EVENTS.WEB3_REQUEST, {
              eventId: g.id,
              method: `relay::${n.method}`,
              sessionIdHash: this.getSessionIdHash(),
              storedSessionIdHash: y ? t.Session.hash(y.id) : "",
              isSessionMismatched: (y?.id !== this._session.id).toString(),
            }),
            this.publishEvent("Web3Request", g, !0)
              .then((_) => {
                var v;
                null === (v = this.diagnostic) ||
                  void 0 === v ||
                  v.log(f.EVENTS.WEB3_REQUEST_PUBLISHED, {
                    eventId: g.id,
                    method: `relay::${n.method}`,
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: y ? t.Session.hash(y.id) : "",
                    isSessionMismatched: (
                      y?.id !== this._session.id
                    ).toString(),
                  });
              })
              .catch((_) => {
                this.handleWeb3ResponseMessage({
                  type: "WEB3_RESPONSE",
                  id: g.id,
                  response: { method: n.method, errorMessage: _.message },
                });
              });
        }
        publishWeb3RequestCanceledEvent(r) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: r },
            !1
          ).then();
        }
        publishEvent(r, n, a) {
          return this.connection.publishEvent(r, n, a);
        }
        handleWeb3ResponseMessage(r) {
          var n;
          const { response: a } = r;
          if (
            (null === (n = this.diagnostic) ||
              void 0 === n ||
              n.log(f.EVENTS.WEB3_RESPONSE, {
                eventId: r.id,
                method: `relay::${a.method}`,
                sessionIdHash: this.getSessionIdHash(),
              }),
            "requestEthereumAccounts" === a.method)
          )
            return (
              c.accountRequestCallbackIds.forEach((g) =>
                this.invokeCallback(
                  Object.assign(Object.assign({}, r), { id: g })
                )
              ),
              void c.accountRequestCallbackIds.clear()
            );
          this.invokeCallback(r);
        }
        handleErrorResponse(r, n, a, g) {
          var y;
          const _ =
            null !== (y = a?.message) && void 0 !== y
              ? y
              : (0, e.getMessageFromCode)(g);
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: r,
            response: { method: n, errorMessage: _, errorCode: g },
          });
        }
        invokeCallback(r) {
          const n = this.relayEventManager.callbacks.get(r.id);
          n && (n(r.response), this.relayEventManager.callbacks.delete(r.id));
        }
        requestEthereumAccounts() {
          const r = {
              method: "requestEthereumAccounts",
              params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null,
              },
            },
            a = (0, u.randomBytesHex)(8),
            g = (_) => {
              this.publishWeb3RequestCanceledEvent(a),
                this.handleErrorResponse(a, r.method, _);
            };
          return {
            promise: new Promise((_, v) => {
              if (
                (this.relayEventManager.callbacks.set(a, (b) => {
                  if (
                    (this.ui.hideRequestEthereumAccounts(),
                    (0, o.isErrorResponse)(b))
                  )
                    return v(new Error(b.errorMessage));
                  _(b);
                }),
                this.ui.inlineAccountsResponse())
              )
                this.ui.requestEthereumAccounts({
                  onCancel: g,
                  onAccounts: (E) => {
                    this.handleWeb3ResponseMessage({
                      type: "WEB3_RESPONSE",
                      id: a,
                      response: {
                        method: "requestEthereumAccounts",
                        result: E,
                      },
                    });
                  },
                });
              else {
                const b = e.standardErrors.provider.userRejectedRequest(
                  "User denied account authorization"
                );
                this.ui.requestEthereumAccounts({ onCancel: () => g(b) });
              }
              c.accountRequestCallbackIds.add(a),
                !this.ui.inlineAccountsResponse() &&
                  !this.ui.isStandalone() &&
                  this.publishWeb3RequestEvent(a, r);
            }),
            cancel: g,
          };
        }
        selectProvider(r) {
          const a = (0, u.randomBytesHex)(8);
          return {
            cancel: (_) => {
              this.publishWeb3RequestCanceledEvent(a),
                this.handleErrorResponse(a, "selectProvider", _);
            },
            promise: new Promise((_, v) => {
              this.relayEventManager.callbacks.set(a, (w) => {
                if ((0, o.isErrorResponse)(w))
                  return v(new Error(w.errorMessage));
                _(w);
              }),
                this.ui.selectProvider &&
                  this.ui.selectProvider({
                    onApprove: (w) => {
                      this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: a,
                        response: { method: "selectProvider", result: w },
                      });
                    },
                    onCancel: (w) => {
                      this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: a,
                        response: {
                          method: "selectProvider",
                          result: m.ProviderType.Unselected,
                        },
                      });
                    },
                    providerOptions: r,
                  });
            }),
          };
        }
        watchAsset(r, n, a, g, y, _) {
          const v = {
            method: "watchAsset",
            params: {
              type: r,
              options: { address: n, symbol: a, decimals: g, image: y },
              chainId: _,
            },
          };
          let b = null;
          const E = (0, u.randomBytesHex)(8),
            w = (T) => {
              this.publishWeb3RequestCanceledEvent(E),
                this.handleErrorResponse(E, v.method, T),
                b?.();
            };
          return (
            this.ui.inlineWatchAsset() ||
              (b = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: w,
                onResetConnection: this.resetAndReload,
              })),
            {
              cancel: w,
              promise: new Promise((T, k) => {
                this.relayEventManager.callbacks.set(E, (G) => {
                  if ((b?.(), (0, o.isErrorResponse)(G)))
                    return k(new Error(G.errorMessage));
                  T(G);
                }),
                  this.ui.inlineWatchAsset() &&
                    this.ui.watchAsset({
                      onApprove: () => {
                        this.handleWeb3ResponseMessage({
                          type: "WEB3_RESPONSE",
                          id: E,
                          response: { method: "watchAsset", result: !0 },
                        });
                      },
                      onCancel: (G) => {
                        this.handleWeb3ResponseMessage({
                          type: "WEB3_RESPONSE",
                          id: E,
                          response: { method: "watchAsset", result: !1 },
                        });
                      },
                      type: r,
                      address: n,
                      symbol: a,
                      decimals: g,
                      image: y,
                      chainId: _,
                    }),
                  !this.ui.inlineWatchAsset() &&
                    !this.ui.isStandalone() &&
                    this.publishWeb3RequestEvent(E, v);
              }),
            }
          );
        }
        addEthereumChain(r, n, a, g, y, _) {
          const v = {
            method: "addEthereumChain",
            params: {
              chainId: r,
              rpcUrls: n,
              blockExplorerUrls: g,
              chainName: y,
              iconUrls: a,
              nativeCurrency: _,
            },
          };
          let b = null;
          const E = (0, u.randomBytesHex)(8),
            w = (T) => {
              this.publishWeb3RequestCanceledEvent(E),
                this.handleErrorResponse(E, v.method, T),
                b?.();
            };
          return (
            this.ui.inlineAddEthereumChain(r) ||
              (b = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: w,
                onResetConnection: this.resetAndReload,
              })),
            {
              promise: new Promise((T, k) => {
                this.relayEventManager.callbacks.set(E, (G) => {
                  if ((b?.(), (0, o.isErrorResponse)(G)))
                    return k(new Error(G.errorMessage));
                  T(G);
                }),
                  this.ui.inlineAddEthereumChain(r) &&
                    this.ui.addEthereumChain({
                      onCancel: (G) => {
                        this.handleWeb3ResponseMessage({
                          type: "WEB3_RESPONSE",
                          id: E,
                          response: {
                            method: "addEthereumChain",
                            result: { isApproved: !1, rpcUrl: "" },
                          },
                        });
                      },
                      onApprove: (G) => {
                        this.handleWeb3ResponseMessage({
                          type: "WEB3_RESPONSE",
                          id: E,
                          response: {
                            method: "addEthereumChain",
                            result: { isApproved: !0, rpcUrl: G },
                          },
                        });
                      },
                      chainId: v.params.chainId,
                      rpcUrls: v.params.rpcUrls,
                      blockExplorerUrls: v.params.blockExplorerUrls,
                      chainName: v.params.chainName,
                      iconUrls: v.params.iconUrls,
                      nativeCurrency: v.params.nativeCurrency,
                    }),
                  !this.ui.inlineAddEthereumChain(r) &&
                    !this.ui.isStandalone() &&
                    this.publishWeb3RequestEvent(E, v);
              }),
              cancel: w,
            }
          );
        }
        switchEthereumChain(r, n) {
          const a = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: r }, { address: n }),
            },
            g = (0, u.randomBytesHex)(8);
          return {
            promise: new Promise((v, b) => {
              this.relayEventManager.callbacks.set(g, (S) =>
                (0, o.isErrorResponse)(S) && S.errorCode
                  ? b(
                      e.standardErrors.provider.custom({
                        code: S.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : (0, o.isErrorResponse)(S)
                  ? b(new Error(S.errorMessage))
                  : void v(S)
              ),
                this.ui.switchEthereumChain({
                  onCancel: (S) => {
                    var T;
                    if (S) {
                      const k =
                        null !== (T = (0, e.getErrorCode)(S)) && void 0 !== T
                          ? T
                          : e.standardErrorCodes.provider.unsupportedChain;
                      this.handleErrorResponse(
                        g,
                        "switchEthereumChain",
                        S instanceof Error
                          ? S
                          : e.standardErrors.provider.unsupportedChain(r),
                        k
                      );
                    } else
                      this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: g,
                        response: {
                          method: "switchEthereumChain",
                          result: { isApproved: !1, rpcUrl: "" },
                        },
                      });
                  },
                  onApprove: (S) => {
                    this.handleWeb3ResponseMessage({
                      type: "WEB3_RESPONSE",
                      id: g,
                      response: {
                        method: "switchEthereumChain",
                        result: { isApproved: !0, rpcUrl: S },
                      },
                    });
                  },
                  chainId: a.params.chainId,
                  address: a.params.address,
                }),
                !this.ui.inlineSwitchEthereumChain() &&
                  !this.ui.isStandalone() &&
                  this.publishWeb3RequestEvent(g, a);
            }),
            cancel: (v) => {
              this.publishWeb3RequestCanceledEvent(g),
                this.handleErrorResponse(g, a.method, v);
            },
          };
        }
        inlineAddEthereumChain(r) {
          return this.ui.inlineAddEthereumChain(r);
        }
        getSessionIdHash() {
          return t.Session.hash(this._session.id);
        }
        sendRequestStandalone(r, n) {
          const a = (y) => {
              this.handleErrorResponse(r, n.method, y);
            },
            g = (y) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: r,
                response: y,
              });
            };
          switch (n.method) {
            case "signEthereumMessage":
              this.ui.signEthereumMessage({
                request: n,
                onSuccess: g,
                onCancel: a,
              });
              break;
            case "signEthereumTransaction":
              this.ui.signEthereumTransaction({
                request: n,
                onSuccess: g,
                onCancel: a,
              });
              break;
            case "submitEthereumTransaction":
              this.ui.submitEthereumTransaction({
                request: n,
                onSuccess: g,
                onCancel: a,
              });
              break;
            case "ethereumAddressFromSignedMessage":
              this.ui.ethereumAddressFromSignedMessage({
                request: n,
                onSuccess: g,
              });
              break;
            default:
              a();
          }
        }
      }
      (s.WalletLinkRelay = c), (c.accountRequestCallbackIds = new Set());
    },
    7547: (I, s, d) => {
      "use strict";
      var e = d(7156).default;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.WalletLinkConnection = void 0);
      const m = d(8737),
        u = d(8048),
        f = d(6480),
        h = d(8561),
        t = d(6293),
        i = d(6724),
        o = d(243);
      s.WalletLinkConnection = class p {
        constructor({
          session: n,
          linkAPIUrl: a,
          listener: g,
          diagnostic: y,
          WebSocketClass: _ = WebSocket,
        }) {
          var v = this;
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = (0, m.IntNumber)(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (E) => {
              E &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (S) =>
                      E.JsonRpcUrl && this.handleChainUpdated(S, E.JsonRpcUrl),
                  ],
                ]).forEach((S, T) => {
                  const k = E[T];
                  void 0 !== k && S(k);
                });
            }),
            (this.handleDestroyed = (E) => {
              var w, S;
              "1" === E &&
                (null === (w = this.listener) ||
                  void 0 === w ||
                  w.resetAndReload(),
                null === (S = this.diagnostic) ||
                  void 0 === S ||
                  S.log(f.EVENTS.METADATA_DESTROYED, {
                    alreadyDestroyed: this.isDestroyed,
                    sessionIdHash: t.Session.hash(this.session.id),
                  }));
            }),
            (this.handleAccountUpdated = (function () {
              var E = e(function* (w) {
                var S, T;
                try {
                  const k = yield v.cipher.decrypt(w);
                  null === (S = v.listener) ||
                    void 0 === S ||
                    S.accountUpdated(k);
                } catch {
                  null === (T = v.diagnostic) ||
                    void 0 === T ||
                    T.log(f.EVENTS.GENERAL_ERROR, {
                      message: "Had error decrypting",
                      value: "selectedAddress",
                    });
                }
              });
              return function (w) {
                return E.apply(this, arguments);
              };
            })()),
            (this.handleMetadataUpdated = (function () {
              var E = e(function* (w, S) {
                var T, k;
                try {
                  const x = yield v.cipher.decrypt(S);
                  null === (T = v.listener) ||
                    void 0 === T ||
                    T.metadataUpdated(w, x);
                } catch {
                  null === (k = v.diagnostic) ||
                    void 0 === k ||
                    k.log(f.EVENTS.GENERAL_ERROR, {
                      message: "Had error decrypting",
                      value: w,
                    });
                }
              });
              return function (w, S) {
                return E.apply(this, arguments);
              };
            })()),
            (this.handleWalletUsernameUpdated = (function () {
              var E = e(function* (w) {
                v.handleMetadataUpdated(h.WALLET_USER_NAME_KEY, w);
              });
              return function (w) {
                return E.apply(this, arguments);
              };
            })()),
            (this.handleAppVersionUpdated = (function () {
              var E = e(function* (w) {
                v.handleMetadataUpdated(h.APP_VERSION_KEY, w);
              });
              return function (w) {
                return E.apply(this, arguments);
              };
            })()),
            (this.handleChainUpdated = (function () {
              var E = e(function* (w, S) {
                var T, k;
                try {
                  const x = yield v.cipher.decrypt(w),
                    $ = yield v.cipher.decrypt(S);
                  null === (T = v.listener) ||
                    void 0 === T ||
                    T.chainUpdated(x, $);
                } catch {
                  null === (k = v.diagnostic) ||
                    void 0 === k ||
                    k.log(f.EVENTS.GENERAL_ERROR, {
                      message: "Had error decrypting",
                      value: "chainId|jsonRpcUrl",
                    });
                }
              });
              return function (w, S) {
                return E.apply(this, arguments);
              };
            })()),
            (this.session = n),
            (this.cipher = new u.Cipher(n.secret)),
            (this.diagnostic = y),
            (this.listener = g);
          const b = new o.WalletLinkWebSocket(`${a}/rpc`, _);
          b.setConnectionStateListener(
            (function () {
              var E = e(function* (w) {
                var S;
                null === (S = v.diagnostic) ||
                  void 0 === S ||
                  S.log(f.EVENTS.CONNECTED_STATE_CHANGE, {
                    state: w,
                    sessionIdHash: t.Session.hash(n.id),
                  });
                let T = !1;
                switch (w) {
                  case o.ConnectionState.DISCONNECTED:
                    if (!v.destroyed) {
                      const k = (function () {
                        var x = e(function* () {
                          yield new Promise(($) => setTimeout($, 5e3)),
                            v.destroyed ||
                              b.connect().catch(() => {
                                k();
                              });
                        });
                        return function () {
                          return x.apply(this, arguments);
                        };
                      })();
                      k();
                    }
                    break;
                  case o.ConnectionState.CONNECTED:
                    try {
                      yield v.authenticate(),
                        v.sendIsLinked(),
                        v.sendGetSessionConfig(),
                        (T = !0);
                    } catch {}
                    v.updateLastHeartbeat(),
                      setInterval(() => {
                        v.heartbeat();
                      }, 1e4),
                      v.shouldFetchUnseenEventsOnConnect &&
                        v.fetchUnseenEventsAPI();
                }
                v.connected !== T && (v.connected = T);
              });
              return function (w) {
                return E.apply(this, arguments);
              };
            })()
          ),
            b.setIncomingDataListener((E) => {
              var w, S, T;
              switch (E.type) {
                case "Heartbeat":
                  return void this.updateLastHeartbeat();
                case "IsLinkedOK":
                case "Linked": {
                  const k = "IsLinkedOK" === E.type ? E.linked : void 0;
                  null === (w = this.diagnostic) ||
                    void 0 === w ||
                    w.log(f.EVENTS.LINKED, {
                      sessionIdHash: t.Session.hash(n.id),
                      linked: k,
                      type: E.type,
                      onlineGuests: E.onlineGuests,
                    }),
                    (this.linked = k || E.onlineGuests > 0);
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  null === (S = this.diagnostic) ||
                    void 0 === S ||
                    S.log(f.EVENTS.SESSION_CONFIG_RECEIVED, {
                      sessionIdHash: t.Session.hash(n.id),
                      metadata_keys:
                        E && E.metadata ? Object.keys(E.metadata) : void 0,
                    }),
                    this.handleSessionMetadataUpdated(E.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(E);
              }
              void 0 !== E.id &&
                (null === (T = this.requestResolutions.get(E.id)) ||
                  void 0 === T ||
                  T(E));
            }),
            (this.ws = b),
            (this.http = new i.WalletLinkHTTP(a, n.id, n.key));
        }
        connect() {
          var n;
          if (this.destroyed) throw new Error("instance is destroyed");
          null === (n = this.diagnostic) ||
            void 0 === n ||
            n.log(f.EVENTS.STARTED_CONNECTING, {
              sessionIdHash: t.Session.hash(this.session.id),
            }),
            this.ws.connect();
        }
        destroy() {
          var n;
          (this.destroyed = !0),
            this.ws.disconnect(),
            null === (n = this.diagnostic) ||
              void 0 === n ||
              n.log(f.EVENTS.DISCONNECTED, {
                sessionIdHash: t.Session.hash(this.session.id),
              }),
            (this.listener = void 0);
        }
        get isDestroyed() {
          return this.destroyed;
        }
        get connected() {
          return this._connected;
        }
        set connected(n) {
          var a, g;
          (this._connected = n),
            n &&
              (null === (a = this.onceConnected) ||
                void 0 === a ||
                a.call(this)),
            null === (g = this.listener) ||
              void 0 === g ||
              g.connectedUpdated(n);
        }
        setOnceConnected(n) {
          return new Promise((a) => {
            this.connected
              ? n().then(a)
              : (this.onceConnected = () => {
                  n().then(a), (this.onceConnected = void 0);
                });
          });
        }
        get linked() {
          return this._linked;
        }
        set linked(n) {
          var a, g;
          (this._linked = n),
            n &&
              (null === (a = this.onceLinked) || void 0 === a || a.call(this)),
            null === (g = this.listener) || void 0 === g || g.linkedUpdated(n);
        }
        setOnceLinked(n) {
          return new Promise((a) => {
            this.linked
              ? n().then(a)
              : (this.onceLinked = () => {
                  n().then(a), (this.onceLinked = void 0);
                });
          });
        }
        handleIncomingEvent(n) {
          var a = this;
          return e(function* () {
            var g, y;
            if ("Event" === n.type && "Web3Response" === n.event)
              try {
                const _ = yield a.cipher.decrypt(n.data),
                  v = JSON.parse(_);
                if ("WEB3_RESPONSE" !== v.type) return;
                null === (g = a.listener) ||
                  void 0 === g ||
                  g.handleWeb3ResponseMessage(v);
              } catch {
                null === (y = a.diagnostic) ||
                  void 0 === y ||
                  y.log(f.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "incomingEvent",
                  });
              }
          })();
        }
        checkUnseenEvents() {
          var n = this;
          return e(function* () {
            if (n.connected) {
              yield new Promise((a) => setTimeout(a, 250));
              try {
                yield n.fetchUnseenEventsAPI();
              } catch (a) {
                console.error("Unable to check for unseen events", a);
              }
            } else n.shouldFetchUnseenEventsOnConnect = !0;
          })();
        }
        fetchUnseenEventsAPI() {
          var n = this;
          return e(function* () {
            (n.shouldFetchUnseenEventsOnConnect = !1),
              (yield n.http.fetchUnseenEvents()).forEach((g) =>
                n.handleIncomingEvent(g)
              );
          })();
        }
        setSessionMetadata(n, a) {
          var g = this;
          return e(function* () {
            const y = {
              type: "SetSessionConfig",
              id: (0, m.IntNumber)(g.nextReqId++),
              sessionId: g.session.id,
              metadata: { [n]: a },
            };
            return g.setOnceConnected(
              e(function* () {
                const _ = yield g.makeRequest(y);
                if ("Fail" === _.type)
                  throw new Error(_.error || "failed to set session metadata");
              })
            );
          })();
        }
        publishEvent(n, a, g = !1) {
          var y = this;
          return e(function* () {
            const _ = yield y.cipher.encrypt(
                JSON.stringify(
                  Object.assign(Object.assign({}, a), {
                    origin: location.origin,
                    relaySource: window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                  })
                )
              ),
              v = {
                type: "PublishEvent",
                id: (0, m.IntNumber)(y.nextReqId++),
                sessionId: y.session.id,
                event: n,
                data: _,
                callWebhook: g,
              };
            return y.setOnceLinked(
              e(function* () {
                const b = yield y.makeRequest(v);
                if ("Fail" === b.type)
                  throw new Error(b.error || "failed to publish event");
                return b.eventId;
              })
            );
          })();
        }
        sendData(n) {
          this.ws.sendData(JSON.stringify(n));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            this.ws.disconnect();
          else
            try {
              this.ws.sendData("h");
            } catch {}
        }
        makeRequest(n, a = 6e4) {
          var g = this;
          return e(function* () {
            const y = n.id;
            let _;
            return (
              g.sendData(n),
              Promise.race([
                new Promise((v, b) => {
                  _ = window.setTimeout(() => {
                    b(new Error(`request ${y} timed out`));
                  }, a);
                }),
                new Promise((v) => {
                  g.requestResolutions.set(y, (b) => {
                    clearTimeout(_), v(b), g.requestResolutions.delete(y);
                  });
                }),
              ])
            );
          })();
        }
        authenticate() {
          var n = this;
          return e(function* () {
            const a = {
                type: "HostSession",
                id: (0, m.IntNumber)(n.nextReqId++),
                sessionId: n.session.id,
                sessionKey: n.session.key,
              },
              g = yield n.makeRequest(a);
            if ("Fail" === g.type)
              throw new Error(g.error || "failed to authentcate");
          })();
        }
        sendIsLinked() {
          const n = {
            type: "IsLinked",
            id: (0, m.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
          };
          this.sendData(n);
        }
        sendGetSessionConfig() {
          const n = {
            type: "GetSessionConfig",
            id: (0, m.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
          };
          this.sendData(n);
        }
      };
    },
    6724: (I, s, d) => {
      "use strict";
      var e = d(7156).default;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.WalletLinkHTTP = void 0),
        (s.WalletLinkHTTP = class m {
          constructor(f, h, t) {
            (this.linkAPIUrl = f),
              (this.sessionId = h),
              (this.auth = `Basic ${btoa(`${h}:${t}`)}`);
          }
          markUnseenEventsAsSeen(f) {
            var h = this;
            return e(function* () {
              return Promise.all(
                f.map((t) =>
                  fetch(`${h.linkAPIUrl}/events/${t.eventId}/seen`, {
                    method: "POST",
                    headers: { Authorization: h.auth },
                  })
                )
              ).catch((t) =>
                console.error("Unabled to mark event as failed:", t)
              );
            })();
          }
          fetchUnseenEvents() {
            var f = this;
            return e(function* () {
              var h;
              const t = yield fetch(`${f.linkAPIUrl}/events?unseen=true`, {
                headers: { Authorization: f.auth },
              });
              if (t.ok) {
                const { events: i, error: o } = yield t.json();
                if (o) throw new Error(`Check unseen events failed: ${o}`);
                const l =
                  null !==
                    (h = i
                      ?.filter((c) => "Web3Response" === c.event)
                      .map((c) => ({
                        type: "Event",
                        sessionId: f.sessionId,
                        eventId: c.id,
                        event: c.event,
                        data: c.data,
                      }))) && void 0 !== h
                    ? h
                    : [];
                return f.markUnseenEventsAsSeen(l), l;
              }
              throw new Error(`Check unseen events failed: ${t.status}`);
            })();
          }
        });
    },
    243: (I, s, d) => {
      "use strict";
      var e = d(7156).default;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.WalletLinkWebSocket = s.ConnectionState = void 0);
      var m = (function (f) {
        return (
          (f[(f.DISCONNECTED = 0)] = "DISCONNECTED"),
          (f[(f.CONNECTING = 1)] = "CONNECTING"),
          (f[(f.CONNECTED = 2)] = "CONNECTED"),
          f
        );
      })(m || (s.ConnectionState = m = {}));
      s.WalletLinkWebSocket = class u {
        setConnectionStateListener(h) {
          this.connectionStateListener = h;
        }
        setIncomingDataListener(h) {
          this.incomingDataListener = h;
        }
        constructor(h, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = h.replace(/^http/, "ws"));
        }
        connect() {
          var h = this;
          return e(function* () {
            if (h.webSocket) throw new Error("webSocket object is not null");
            return new Promise((t, i) => {
              var o;
              let l;
              try {
                h.webSocket = l = new h.WebSocketClass(h.url);
              } catch (c) {
                return void i(c);
              }
              null === (o = h.connectionStateListener) ||
                void 0 === o ||
                o.call(h, m.CONNECTING),
                (l.onclose = (c) => {
                  var p;
                  h.clearWebSocket(),
                    i(new Error(`websocket error ${c.code}: ${c.reason}`)),
                    null === (p = h.connectionStateListener) ||
                      void 0 === p ||
                      p.call(h, m.DISCONNECTED);
                }),
                (l.onopen = (c) => {
                  var p;
                  t(),
                    null === (p = h.connectionStateListener) ||
                      void 0 === p ||
                      p.call(h, m.CONNECTED),
                    h.pendingData.length > 0 &&
                      ([...h.pendingData].forEach((n) => h.sendData(n)),
                      (h.pendingData = []));
                }),
                (l.onmessage = (c) => {
                  var p, r;
                  if ("h" === c.data)
                    null === (p = h.incomingDataListener) ||
                      void 0 === p ||
                      p.call(h, { type: "Heartbeat" });
                  else
                    try {
                      const n = JSON.parse(c.data);
                      null === (r = h.incomingDataListener) ||
                        void 0 === r ||
                        r.call(h, n);
                    } catch {}
                });
            });
          })();
        }
        disconnect() {
          var h;
          const { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (h = this.connectionStateListener) ||
                void 0 === h ||
                h.call(this, m.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch {}
          }
        }
        sendData(h) {
          const { webSocket: t } = this;
          if (!t) return this.pendingData.push(h), void this.connect();
          t.send(h);
        }
        clearWebSocket() {
          const { webSocket: h } = this;
          h &&
            ((this.webSocket = null),
            (h.onclose = null),
            (h.onerror = null),
            (h.onmessage = null),
            (h.onopen = null));
        }
      };
    },
    8315: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.isErrorResponse = void 0),
        (s.isErrorResponse = function d(e) {
          return void 0 !== e.errorMessage;
        });
    },
    7144: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.WalletLinkRelayUI = void 0);
      const e = d(8070),
        m = d(3953),
        u = d(1926);
      s.WalletLinkRelayUI = class f {
        constructor(t) {
          (this.standalone = null),
            (this.attached = !1),
            (this.snackbar = new u.Snackbar({ darkMode: t.darkMode })),
            (this.linkFlow = new m.LinkFlow({
              darkMode: t.darkMode,
              version: t.version,
              sessionId: t.session.id,
              sessionSecret: t.session.secret,
              linkAPIUrl: t.linkAPIUrl,
              isParentConnection: !1,
            }));
        }
        attach() {
          if (this.attached)
            throw new Error("Coinbase Wallet SDK UI is already attached");
          const t = document.documentElement,
            i = document.createElement("div");
          (i.className = "-cbwsdk-css-reset"),
            t.appendChild(i),
            this.linkFlow.attach(i),
            this.snackbar.attach(i),
            (this.attached = !0),
            (0, e.injectCssReset)();
        }
        setConnected(t) {
          this.linkFlow.setConnected(t);
        }
        setChainId(t) {
          this.linkFlow.setChainId(t);
        }
        setConnectDisabled(t) {
          this.linkFlow.setConnectDisabled(t);
        }
        addEthereumChain() {}
        watchAsset() {}
        switchEthereumChain() {}
        requestEthereumAccounts(t) {
          this.linkFlow.open({ onCancel: t.onCancel });
        }
        hideRequestEthereumAccounts() {
          this.linkFlow.close();
        }
        signEthereumMessage() {}
        signEthereumTransaction() {}
        submitEthereumTransaction() {}
        ethereumAddressFromSignedMessage() {}
        showConnecting(t) {
          let i;
          return (
            (i = t.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: t.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: t.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: t.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(i)
          );
        }
        reloadUI() {
          document.location.reload();
        }
        inlineAccountsResponse() {
          return !1;
        }
        inlineAddEthereumChain() {
          return !1;
        }
        inlineWatchAsset() {
          return !1;
        }
        inlineSwitchEthereumChain() {
          return !1;
        }
        setStandalone(t) {
          this.standalone = t;
        }
        isStandalone() {
          var t;
          return null !== (t = this.standalone) && void 0 !== t && t;
        }
      };
    },
    4475: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default =
          ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}");
    },
    9959: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (_) {
          return _ && _.__esModule ? _ : { default: _ };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.CoinbaseWalletSteps = s.ConnectContent = void 0);
      const m = e(d(6915)),
        u = d(4354),
        f = d(2329),
        h = d(7938),
        t = d(1757),
        i = d(7072),
        o = d(7341),
        l = d(5499),
        c = d(2531),
        p = e(d(4475)),
        r_steps = y,
        n = (_) => ("light" === _ ? "#FFFFFF" : "#0A0B0D");
      function g({ title: _, description: v, theme: b }) {
        return (0, u.h)(
          "div",
          { className: (0, m.default)("-cbwsdk-connect-item", b) },
          (0, u.h)("div", null, (0, u.h)(i.CoinbaseWalletRound, null)),
          (0, u.h)(
            "div",
            { className: "-cbwsdk-connect-item-copy-wrapper" },
            (0, u.h)("h3", { className: "-cbwsdk-connect-item-title" }, _),
            (0, u.h)("p", { className: "-cbwsdk-connect-item-description" }, v)
          )
        );
      }
      function y({ theme: _ }) {
        return (0, u.h)(
          "ol",
          { className: "-cbwsdk-wallet-steps" },
          (0, u.h)(
            "li",
            { className: (0, m.default)("-cbwsdk-wallet-steps-item", _) },
            (0, u.h)(
              "div",
              { className: "-cbwsdk-wallet-steps-item-wrapper" },
              "Open Coinbase Wallet app"
            )
          ),
          (0, u.h)(
            "li",
            { className: (0, m.default)("-cbwsdk-wallet-steps-item", _) },
            (0, u.h)(
              "div",
              { className: "-cbwsdk-wallet-steps-item-wrapper" },
              (0, u.h)(
                "span",
                null,
                "Tap ",
                (0, u.h)("strong", null, "Scan"),
                " "
              ),
              (0, u.h)(
                "span",
                {
                  className: (0, m.default)(
                    "-cbwsdk-wallet-steps-pad-left",
                    "-cbwsdk-wallet-steps-icon",
                    _
                  ),
                },
                (0, u.h)(o.QRCodeIcon, { fill: n(_) })
              )
            )
          )
        );
      }
      (s.ConnectContent = function a(_) {
        const { theme: v } = _,
          b = (0, f.createQrUrl)(
            _.sessionId,
            _.sessionSecret,
            _.linkAPIUrl,
            _.isParentConnection,
            _.version,
            _.chainId
          ),
          E = r_steps;
        return (0, u.h)(
          "div",
          {
            "data-testid": "connect-content",
            className: (0, m.default)("-cbwsdk-connect-content", v),
          },
          (0, u.h)("style", null, p.default),
          (0, u.h)(
            "div",
            { className: "-cbwsdk-connect-content-header" },
            (0, u.h)(
              "h2",
              {
                className: (0, m.default)("-cbwsdk-connect-content-heading", v),
              },
              "Scan to connect with our mobile app"
            ),
            _.onCancel &&
              (0, u.h)(
                "button",
                {
                  type: "button",
                  className: "-cbwsdk-cancel-button",
                  onClick: _.onCancel,
                },
                (0, u.h)(t.CloseIcon, {
                  fill: "light" === v ? "#0A0B0D" : "#FFFFFF",
                })
              )
          ),
          (0, u.h)(
            "div",
            { className: "-cbwsdk-connect-content-layout" },
            (0, u.h)(
              "div",
              { className: "-cbwsdk-connect-content-column-left" },
              (0, u.h)(g, {
                title: "Coinbase Wallet app",
                description: "Connect with your self-custody wallet",
                theme: v,
              })
            ),
            (0, u.h)(
              "div",
              { className: "-cbwsdk-connect-content-column-right" },
              (0, u.h)(
                "div",
                { className: "-cbwsdk-connect-content-qr-wrapper" },
                (0, u.h)(l.QRCode, {
                  content: b,
                  width: 200,
                  height: 200,
                  fgColor: "#000",
                  bgColor: "transparent",
                }),
                (0, u.h)("input", {
                  type: "hidden",
                  name: "cbw-cbwsdk-version",
                  value: h.LIB_VERSION,
                }),
                (0, u.h)("input", { type: "hidden", value: b })
              ),
              (0, u.h)(E, { theme: v }),
              !_.isConnected &&
                (0, u.h)(
                  "div",
                  {
                    "data-testid": "connecting-spinner",
                    className: (0, m.default)(
                      "-cbwsdk-connect-content-qr-connecting",
                      v
                    ),
                  },
                  (0, u.h)(c.Spinner, {
                    size: 36,
                    color: "dark" === v ? "#FFF" : "#000",
                  }),
                  (0, u.h)("p", null, "Connecting...")
                )
            )
          )
        );
      }),
        (s.CoinbaseWalletSteps = y);
    },
    7077: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default =
          ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}");
    },
    8767: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (l) {
          return l && l.__esModule ? l : { default: l };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.ConnectDialog = void 0);
      const m = e(d(6915)),
        u = d(4354),
        f = d(491),
        h = d(9959),
        t = d(6021),
        i = e(d(7077));
      s.ConnectDialog = (l) => {
        const { isOpen: c, darkMode: p } = l,
          [r, n] = (0, f.useState)(!c),
          [a, g] = (0, f.useState)(!c);
        (0, f.useEffect)(() => {
          const _ = [
            window.setTimeout(() => {
              g(!c);
            }, 10),
          ];
          return (
            c
              ? n(!1)
              : _.push(
                  window.setTimeout(() => {
                    n(!0);
                  }, 360)
                ),
            () => {
              _.forEach(window.clearTimeout);
            }
          );
        }, [c]);
        const y = p ? "dark" : "light";
        return (0, u.h)(
          "div",
          {
            class: (0, m.default)(
              "-cbwsdk-connect-dialog-container",
              r && "-cbwsdk-connect-dialog-container-hidden"
            ),
          },
          (0, u.h)("style", null, i.default),
          (0, u.h)("div", {
            class: (0, m.default)(
              "-cbwsdk-connect-dialog-backdrop",
              y,
              a && "-cbwsdk-connect-dialog-backdrop-hidden"
            ),
          }),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-connect-dialog" },
            (0, u.h)(
              "div",
              {
                class: (0, m.default)(
                  "-cbwsdk-connect-dialog-box",
                  a && "-cbwsdk-connect-dialog-box-hidden"
                ),
              },
              l.connectDisabled
                ? null
                : (0, u.h)(h.ConnectContent, {
                    theme: y,
                    version: l.version,
                    sessionId: l.sessionId,
                    sessionSecret: l.sessionSecret,
                    linkAPIUrl: l.linkAPIUrl,
                    isConnected: l.isConnected,
                    isParentConnection: l.isParentConnection,
                    chainId: l.chainId,
                    onCancel: l.onCancel,
                  }),
              (0, u.h)(t.TryExtensionContent, { theme: y })
            )
          )
        );
      };
    },
    3953: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.LinkFlow = void 0);
      const e = d(4354),
        m = d(8767);
      s.LinkFlow = class u {
        constructor(h) {
          (this.connected = !1),
            (this.chainId = 1),
            (this.isOpen = !1),
            (this.onCancel = null),
            (this.root = null),
            (this.connectDisabled = !1),
            (this.darkMode = h.darkMode),
            (this.version = h.version),
            (this.sessionId = h.sessionId),
            (this.sessionSecret = h.sessionSecret),
            (this.linkAPIUrl = h.linkAPIUrl),
            (this.isParentConnection = h.isParentConnection);
        }
        attach(h) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-link-flow-root"),
            h.appendChild(this.root),
            this.render();
        }
        setConnected(h) {
          this.connected !== h && ((this.connected = h), this.render());
        }
        setChainId(h) {
          this.chainId !== h && ((this.chainId = h), this.render());
        }
        detach() {
          var h;
          this.root &&
            ((0, e.render)(null, this.root),
            null === (h = this.root.parentElement) ||
              void 0 === h ||
              h.removeChild(this.root));
        }
        setConnectDisabled(h) {
          this.connectDisabled = h;
        }
        open(h) {
          (this.isOpen = !0), (this.onCancel = h.onCancel), this.render();
        }
        close() {
          (this.isOpen = !1), (this.onCancel = null), this.render();
        }
        render() {
          this.root &&
            (0, e.render)(
              (0, e.h)(m.ConnectDialog, {
                darkMode: this.darkMode,
                version: this.version,
                sessionId: this.sessionId,
                sessionSecret: this.sessionSecret,
                linkAPIUrl: this.linkAPIUrl,
                isOpen: this.isOpen,
                isConnected: this.connected,
                isParentConnection: this.isParentConnection,
                chainId: this.chainId,
                onCancel: this.onCancel,
                connectDisabled: this.connectDisabled,
              }),
              this.root
            );
        }
      };
    },
    5499: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.QRCode = void 0);
      const m = d(4354),
        u = d(491),
        f = e(d(8167));
      s.QRCode = (t) => {
        const [i, o] = (0, u.useState)("");
        return (
          (0, u.useEffect)(() => {
            var l, c;
            const p = new f.default({
                content: t.content,
                background: t.bgColor || "#ffffff",
                color: t.fgColor || "#000000",
                container: "svg",
                ecl: "M",
                width: null !== (l = t.width) && void 0 !== l ? l : 256,
                height: null !== (c = t.height) && void 0 !== c ? c : 256,
                padding: 0,
                image: t.image,
              }),
              r = Buffer.from(p.svg(), "utf8").toString("base64");
            o(`data:image/svg+xml;base64,${r}`);
          }, [t.bgColor, t.content, t.fgColor, t.height, t.image, t.width]),
          i ? (0, m.h)("img", { src: i, alt: "QR Code" }) : null
        );
      };
    },
    9983: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default =
          ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}");
    },
    8669: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (l) {
          return l && l.__esModule ? l : { default: l };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.RedirectDialog = void 0);
      const m = e(d(6915)),
        u = d(4354),
        f = d(8070),
        h = d(9963),
        t = e(d(9983));
      s.RedirectDialog = class i {
        constructor() {
          this.root = null;
        }
        attach() {
          const c = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            c.appendChild(this.root),
            (0, f.injectCssReset)();
        }
        present(c) {
          this.render(c);
        }
        clear() {
          this.render(null);
        }
        render(c) {
          this.root &&
            ((0, u.render)(null, this.root),
            c &&
              (0, u.render)(
                (0, u.h)(
                  o,
                  Object.assign({}, c, {
                    onDismiss: () => {
                      this.clear();
                    },
                  })
                ),
                this.root
              ));
        }
      };
      const o = ({
        title: l,
        buttonText: c,
        darkMode: p,
        onButtonClick: r,
        onDismiss: n,
      }) => {
        const a = p ? "dark" : "light";
        return (0, u.h)(
          h.SnackbarContainer,
          { darkMode: p },
          (0, u.h)(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            (0, u.h)("style", null, t.default),
            (0, u.h)("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: n,
            }),
            (0, u.h)(
              "div",
              { class: (0, m.default)("-cbwsdk-redirect-dialog-box", a) },
              (0, u.h)("p", null, l),
              (0, u.h)("button", { onClick: r }, c)
            )
          )
        );
      };
    },
    1916: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default =
          ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}");
    },
    1926: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (p) {
          return p && p.__esModule ? p : { default: p };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.SnackbarInstance = s.SnackbarContainer = s.Snackbar = void 0);
      const m = e(d(6915)),
        u = d(4354),
        f = d(491),
        h = e(d(1916));
      (s.Snackbar = class o {
        constructor(r) {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = r.darkMode);
        }
        attach(r) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            r.appendChild(this.root),
            this.render();
        }
        presentItem(r) {
          const n = this.nextItemKey++;
          return (
            this.items.set(n, r),
            this.render(),
            () => {
              this.items.delete(n), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, u.render)(
              (0, u.h)(
                "div",
                null,
                (0, u.h)(
                  s.SnackbarContainer,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([r, n]) =>
                    (0, u.h)(
                      s.SnackbarInstance,
                      Object.assign({}, n, { key: r })
                    )
                  )
                )
              ),
              this.root
            );
        }
      }),
        (s.SnackbarContainer = (p) =>
          (0, u.h)(
            "div",
            { class: (0, m.default)("-cbwsdk-snackbar-container") },
            (0, u.h)("style", null, h.default),
            (0, u.h)("div", { class: "-cbwsdk-snackbar" }, p.children)
          )),
        (s.SnackbarInstance = ({ autoExpand: p, message: r, menuItems: n }) => {
          const [a, g] = (0, f.useState)(!0),
            [y, _] = (0, f.useState)(p ?? !1);
          return (
            (0, f.useEffect)(() => {
              const b = [
                window.setTimeout(() => {
                  g(!1);
                }, 1),
                window.setTimeout(() => {
                  _(!0);
                }, 1e4),
              ];
              return () => {
                b.forEach(window.clearTimeout);
              };
            }),
            (0, u.h)(
              "div",
              {
                class: (0, m.default)(
                  "-cbwsdk-snackbar-instance",
                  a && "-cbwsdk-snackbar-instance-hidden",
                  y && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, u.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    _(!y);
                  },
                },
                (0, u.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, u.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  r
                ),
                (0, u.h)(
                  "div",
                  { class: "-gear-container" },
                  !y &&
                    (0, u.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, u.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, u.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, u.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((b, E) =>
                    (0, u.h)(
                      "div",
                      {
                        class: (0, m.default)(
                          "-cbwsdk-snackbar-instance-menu-item",
                          b.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: b.onClick,
                        key: E,
                      },
                      (0, u.h)(
                        "svg",
                        {
                          width: b.svgWidth,
                          height: b.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, u.h)("path", {
                          "fill-rule": b.defaultFillRule,
                          "clip-rule": b.defaultClipRule,
                          d: b.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, u.h)(
                        "span",
                        {
                          class: (0, m.default)(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            b.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        b.info
                      )
                    )
                  )
                )
            )
          );
        });
    },
    9963: function (I, s, d) {
      "use strict";
      var e =
          (this && this.__createBinding) ||
          (Object.create
            ? function (u, f, h, t) {
                void 0 === t && (t = h);
                var i = Object.getOwnPropertyDescriptor(f, h);
                (!i ||
                  ("get" in i
                    ? !f.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return f[h];
                    },
                  }),
                  Object.defineProperty(u, t, i);
              }
            : function (u, f, h, t) {
                void 0 === t && (t = h), (u[t] = f[h]);
              }),
        m =
          (this && this.__exportStar) ||
          function (u, f) {
            for (var h in u)
              "default" !== h &&
                !Object.prototype.hasOwnProperty.call(f, h) &&
                e(f, u, h);
          };
      Object.defineProperty(s, "__esModule", { value: !0 }), m(d(1926), s);
    },
    9436: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default =
          ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}");
    },
    2531: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (h) {
          return h && h.__esModule ? h : { default: h };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.Spinner = void 0);
      const m = d(4354),
        u = e(d(9436));
      s.Spinner = (h) => {
        var t;
        const i = null !== (t = h.size) && void 0 !== t ? t : 64,
          o = h.color || "#000";
        return (0, m.h)(
          "div",
          { class: "-cbwsdk-spinner" },
          (0, m.h)("style", null, u.default),
          (0, m.h)(
            "svg",
            {
              viewBox: "0 0 100 100",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: i, height: i },
            },
            (0, m.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: o } })
          )
        );
      };
    },
    3325: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default =
          ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}");
    },
    6021: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (c) {
          return c && c.__esModule ? c : { default: c };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.TryExtensionContent = void 0);
      const m = e(d(6915)),
        u = d(4354),
        f = d(491),
        h = d(1654),
        t = d(4453),
        i = d(1115),
        o = e(d(3325));
      s.TryExtensionContent = function l({ theme: c }) {
        const [p, r] = (0, f.useState)(!1),
          n = (0, f.useCallback)(() => {
            window.open(
              "https://api.wallet.coinbase.com/rpc/v2/desktop/chrome",
              "_blank"
            );
          }, []),
          a = (0, f.useCallback)(() => {
            p ? window.location.reload() : (n(), r(!0));
          }, [n, p]);
        return (0, u.h)(
          "div",
          { class: (0, m.default)("-cbwsdk-try-extension", c) },
          (0, u.h)("style", null, o.default),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-try-extension-column-half" },
            (0, u.h)(
              "h3",
              { class: (0, m.default)("-cbwsdk-try-extension-heading", c) },
              "Or try the Coinbase Wallet browser extension"
            ),
            (0, u.h)(
              "div",
              { class: "-cbwsdk-try-extension-cta-wrapper" },
              (0, u.h)(
                "button",
                {
                  class: (0, m.default)("-cbwsdk-try-extension-cta", c),
                  onClick: a,
                },
                p ? "Refresh" : "Install"
              ),
              (0, u.h)(
                "div",
                null,
                !p &&
                  (0, u.h)(h.ArrowLeftIcon, {
                    class: "-cbwsdk-try-extension-cta-icon",
                    fill: "light" === c ? "#0052FF" : "#588AF5",
                  })
              )
            )
          ),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-try-extension-column-half" },
            (0, u.h)(
              "ul",
              { class: "-cbwsdk-try-extension-list" },
              (0, u.h)(
                "li",
                { class: "-cbwsdk-try-extension-list-item" },
                (0, u.h)(
                  "div",
                  { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
                  (0, u.h)(
                    "span",
                    {
                      class: (0, m.default)(
                        "-cbwsdk-try-extension-list-item-icon",
                        c
                      ),
                    },
                    (0, u.h)(t.LaptopIcon, {
                      fill: "light" === c ? "#0A0B0D" : "#FFFFFF",
                    })
                  )
                ),
                (0, u.h)(
                  "div",
                  {
                    class: (0, m.default)(
                      "-cbwsdk-try-extension-list-item-copy",
                      c
                    ),
                  },
                  "Connect with dapps with just one click on your desktop browser"
                )
              ),
              (0, u.h)(
                "li",
                { class: "-cbwsdk-try-extension-list-item" },
                (0, u.h)(
                  "div",
                  { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
                  (0, u.h)(
                    "span",
                    {
                      class: (0, m.default)(
                        "-cbwsdk-try-extension-list-item-icon",
                        c
                      ),
                    },
                    (0, u.h)(i.SafeIcon, {
                      fill: "light" === c ? "#0A0B0D" : "#FFFFFF",
                    })
                  )
                ),
                (0, u.h)(
                  "div",
                  {
                    class: (0, m.default)(
                      "-cbwsdk-try-extension-list-item-copy",
                      c
                    ),
                  },
                  "Add an additional layer of security by using a supported Ledger hardware wallet"
                )
              )
            )
          )
        );
      };
    },
    1654: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.ArrowLeftIcon = void 0);
      const e = d(4354);
      s.ArrowLeftIcon = function m(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z",
          })
        );
      };
    },
    1757: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.CloseIcon = void 0);
      const e = d(4354);
      s.CloseIcon = function m(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "40",
              height: "40",
              viewBox: "0 0 40 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z",
          })
        );
      };
    },
    7072: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.CoinbaseWalletRound = void 0);
      const e = d(4354);
      s.CoinbaseWalletRound = function m(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "28",
              height: "28",
              viewBox: "0 0 28 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("circle", { cx: "14", cy: "14", r: "14", fill: "#0052FF" }),
          (0, e.h)("path", {
            d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
            fill: "white",
          }),
          (0, e.h)("path", {
            d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
            fill: "#0052FF",
          })
        );
      };
    },
    4453: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.LaptopIcon = void 0);
      const e = d(4354);
      s.LaptopIcon = function m(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z",
          }),
          (0, e.h)("path", {
            d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z",
          })
        );
      };
    },
    7341: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.QRCodeIcon = void 0);
      const e = d(4354);
      s.QRCodeIcon = function m(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", { d: "M3 3V8.99939L5 8.99996V5H9V3H3Z" }),
          (0, e.h)("path", { d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z" }),
          (0, e.h)("path", { d: "M21 9H19V5H15.0006L15 3H21V9Z" }),
          (0, e.h)("path", { d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z" })
        );
      };
    },
    1115: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.SafeIcon = void 0);
      const e = d(4354);
      s.SafeIcon = function m(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z",
          })
        );
      };
    },
    7252: (I, s, d) => {
      const e = d(2814),
        m = d(2662);
      function u(a) {
        return a.startsWith("int[")
          ? "int256" + a.slice(3)
          : "int" === a
          ? "int256"
          : a.startsWith("uint[")
          ? "uint256" + a.slice(4)
          : "uint" === a
          ? "uint256"
          : a.startsWith("fixed[")
          ? "fixed128x128" + a.slice(5)
          : "fixed" === a
          ? "fixed128x128"
          : a.startsWith("ufixed[")
          ? "ufixed128x128" + a.slice(6)
          : "ufixed" === a
          ? "ufixed128x128"
          : a;
      }
      function f(a) {
        return parseInt(/^\D+(\d+)$/.exec(a)[1], 10);
      }
      function h(a) {
        var g = /^\D+(\d+)x(\d+)$/.exec(a);
        return [parseInt(g[1], 10), parseInt(g[2], 10)];
      }
      function t(a) {
        var g = a.match(/(.*)\[(.*?)\]$/);
        return g ? ("" === g[2] ? "dynamic" : parseInt(g[2], 10)) : null;
      }
      function i(a) {
        var g = typeof a;
        if ("string" === g)
          return e.isHexString(a)
            ? new m(e.stripHexPrefix(a), 16)
            : new m(a, 10);
        if ("number" === g) return new m(a);
        if (a.toArray) return a;
        throw new Error("Argument is not a number");
      }
      function o(a, g) {
        var y, _, v, b;
        if ("address" === a) return o("uint160", i(g));
        if ("bool" === a) return o("uint8", g ? 1 : 0);
        if ("string" === a) return o("bytes", new Buffer(g, "utf8"));
        if (
          (function c(a) {
            return a.lastIndexOf("]") === a.length - 1;
          })(a)
        ) {
          if (typeof g.length > "u") throw new Error("Not an array?");
          if ("dynamic" !== (y = t(a)) && 0 !== y && g.length > y)
            throw new Error("Elements exceed array size: " + y);
          for (b in ((v = []),
          (a = a.slice(0, a.lastIndexOf("["))),
          "string" == typeof g && (g = JSON.parse(g)),
          g))
            v.push(o(a, g[b]));
          if ("dynamic" === y) {
            var E = o("uint256", g.length);
            v.unshift(E);
          }
          return Buffer.concat(v);
        }
        if ("bytes" === a)
          return (
            (g = new Buffer(g)),
            (v = Buffer.concat([o("uint256", g.length), g])),
            g.length % 32 != 0 &&
              (v = Buffer.concat([v, e.zeros(32 - (g.length % 32))])),
            v
          );
        if (a.startsWith("bytes")) {
          if ((y = f(a)) < 1 || y > 32)
            throw new Error("Invalid bytes<N> width: " + y);
          return e.setLengthRight(g, 32);
        }
        if (a.startsWith("uint")) {
          if ((y = f(a)) % 8 || y < 8 || y > 256)
            throw new Error("Invalid uint<N> width: " + y);
          if ((_ = i(g)).bitLength() > y)
            throw new Error(
              "Supplied uint exceeds width: " + y + " vs " + _.bitLength()
            );
          if (_ < 0) throw new Error("Supplied uint is negative");
          return _.toArrayLike(Buffer, "be", 32);
        }
        if (a.startsWith("int")) {
          if ((y = f(a)) % 8 || y < 8 || y > 256)
            throw new Error("Invalid int<N> width: " + y);
          if ((_ = i(g)).bitLength() > y)
            throw new Error(
              "Supplied int exceeds width: " + y + " vs " + _.bitLength()
            );
          return _.toTwos(256).toArrayLike(Buffer, "be", 32);
        }
        if (a.startsWith("ufixed")) {
          if (((y = h(a)), (_ = i(g)) < 0))
            throw new Error("Supplied ufixed is negative");
          return o("uint256", _.mul(new m(2).pow(new m(y[1]))));
        }
        if (a.startsWith("fixed"))
          return (y = h(a)), o("int256", i(g).mul(new m(2).pow(new m(y[1]))));
        throw new Error("Unsupported or invalid type: " + a);
      }
      function l(a) {
        return "string" === a || "bytes" === a || "dynamic" === t(a);
      }
      function r(a, g) {
        if (a.length !== g.length)
          throw new Error("Number of types are not matching the values");
        for (var y, _, v = [], b = 0; b < a.length; b++) {
          var E = u(a[b]),
            w = g[b];
          if ("bytes" === E) v.push(w);
          else if ("string" === E) v.push(new Buffer(w, "utf8"));
          else if ("bool" === E) v.push(new Buffer(w ? "01" : "00", "hex"));
          else if ("address" === E) v.push(e.setLength(w, 20));
          else if (E.startsWith("bytes")) {
            if ((y = f(E)) < 1 || y > 32)
              throw new Error("Invalid bytes<N> width: " + y);
            v.push(e.setLengthRight(w, y));
          } else if (E.startsWith("uint")) {
            if ((y = f(E)) % 8 || y < 8 || y > 256)
              throw new Error("Invalid uint<N> width: " + y);
            if ((_ = i(w)).bitLength() > y)
              throw new Error(
                "Supplied uint exceeds width: " + y + " vs " + _.bitLength()
              );
            v.push(_.toArrayLike(Buffer, "be", y / 8));
          } else {
            if (!E.startsWith("int"))
              throw new Error("Unsupported or invalid type: " + E);
            if ((y = f(E)) % 8 || y < 8 || y > 256)
              throw new Error("Invalid int<N> width: " + y);
            if ((_ = i(w)).bitLength() > y)
              throw new Error(
                "Supplied int exceeds width: " + y + " vs " + _.bitLength()
              );
            v.push(_.toTwos(y).toArrayLike(Buffer, "be", y / 8));
          }
        }
        return Buffer.concat(v);
      }
      I.exports = {
        rawEncode: function p(a, g) {
          var y = [],
            _ = [],
            v = 32 * a.length;
          for (var b in a) {
            var E = u(a[b]),
              S = o(E, g[b]);
            l(E)
              ? (y.push(o("uint256", v)), _.push(S), (v += S.length))
              : y.push(S);
          }
          return Buffer.concat(y.concat(_));
        },
        solidityPack: r,
        soliditySHA3: function n(a, g) {
          return e.keccak(r(a, g));
        },
      };
    },
    3348: (I, s, d) => {
      const e = d(2814),
        m = d(7252),
        u = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        f = {
          encodeData(t, i, o, l = !0) {
            const c = ["bytes32"],
              p = [this.hashType(t, o)];
            if (l) {
              const r = (n, a, g) => {
                if (void 0 !== o[a])
                  return [
                    "bytes32",
                    null == g
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : e.keccak(this.encodeData(a, g, o, l)),
                  ];
                if (void 0 === g)
                  throw new Error(`missing value for field ${n} of type ${a}`);
                if ("bytes" === a) return ["bytes32", e.keccak(g)];
                if ("string" === a)
                  return (
                    "string" == typeof g && (g = Buffer.from(g, "utf8")),
                    ["bytes32", e.keccak(g)]
                  );
                if (a.lastIndexOf("]") === a.length - 1) {
                  const y = a.slice(0, a.lastIndexOf("[")),
                    _ = g.map((v) => r(n, y, v));
                  return [
                    "bytes32",
                    e.keccak(
                      m.rawEncode(
                        _.map(([v]) => v),
                        _.map(([, v]) => v)
                      )
                    ),
                  ];
                }
                return [a, g];
              };
              for (const n of o[t]) {
                const [a, g] = r(n.name, n.type, i[n.name]);
                c.push(a), p.push(g);
              }
            } else
              for (const r of o[t]) {
                let n = i[r.name];
                if (void 0 !== n)
                  if ("bytes" === r.type)
                    c.push("bytes32"), (n = e.keccak(n)), p.push(n);
                  else if ("string" === r.type)
                    c.push("bytes32"),
                      "string" == typeof n && (n = Buffer.from(n, "utf8")),
                      (n = e.keccak(n)),
                      p.push(n);
                  else if (void 0 !== o[r.type])
                    c.push("bytes32"),
                      (n = e.keccak(this.encodeData(r.type, n, o, l))),
                      p.push(n);
                  else {
                    if (r.type.lastIndexOf("]") === r.type.length - 1)
                      throw new Error(
                        "Arrays currently unimplemented in encodeData"
                      );
                    c.push(r.type), p.push(n);
                  }
              }
            return m.rawEncode(c, p);
          },
          encodeType(t, i) {
            let o = "",
              l = this.findTypeDependencies(t, i).filter((c) => c !== t);
            l = [t].concat(l.sort());
            for (const c of l) {
              if (!i[c]) throw new Error("No type definition specified: " + c);
              o +=
                c +
                "(" +
                i[c].map(({ name: r, type: n }) => n + " " + r).join(",") +
                ")";
            }
            return o;
          },
          findTypeDependencies(t, i, o = []) {
            if (((t = t.match(/^\w*/)[0]), o.includes(t) || void 0 === i[t]))
              return o;
            o.push(t);
            for (const l of i[t])
              for (const c of this.findTypeDependencies(l.type, i, o))
                !o.includes(c) && o.push(c);
            return o;
          },
          hashStruct(t, i, o, l = !0) {
            return e.keccak(this.encodeData(t, i, o, l));
          },
          hashType(t, i) {
            return e.keccak(this.encodeType(t, i));
          },
          sanitizeData(t) {
            const i = {};
            for (const o in u.properties) t[o] && (i[o] = t[o]);
            return (
              i.types &&
                (i.types = Object.assign({ EIP712Domain: [] }, i.types)),
              i
            );
          },
          hash(t, i = !0) {
            const o = this.sanitizeData(t),
              l = [Buffer.from("1901", "hex")];
            return (
              l.push(this.hashStruct("EIP712Domain", o.domain, o.types, i)),
              "EIP712Domain" !== o.primaryType &&
                l.push(this.hashStruct(o.primaryType, o.message, o.types, i)),
              e.keccak(Buffer.concat(l))
            );
          },
        };
      I.exports = {
        TYPED_MESSAGE_SCHEMA: u,
        TypedDataUtils: f,
        hashForSignTypedDataLegacy: function (t) {
          return (function h(t) {
            const i = new Error("Expect argument to be non-empty array");
            if ("object" != typeof t || !t.length) throw i;
            const o = t.map(function (p) {
                return "bytes" === p.type ? e.toBuffer(p.value) : p.value;
              }),
              l = t.map(function (p) {
                return p.type;
              }),
              c = t.map(function (p) {
                if (!p.name) throw i;
                return p.type + " " + p.name;
              });
            return m.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                m.soliditySHA3(new Array(t.length).fill("string"), c),
                m.soliditySHA3(l, o),
              ]
            );
          })(t.data);
        },
        hashForSignTypedData_v3: function (t) {
          return f.hash(t.data, !1);
        },
        hashForSignTypedData_v4: function (t) {
          return f.hash(t.data);
        },
      };
    },
    2814: (I, s, d) => {
      const e = d(568),
        m = d(2662);
      function u(r) {
        return Buffer.allocUnsafe(r).fill(0);
      }
      function f(r, n, a) {
        const g = u(n);
        return (
          (r = t(r)),
          a
            ? r.length < n
              ? (r.copy(g), g)
              : r.slice(0, n)
            : r.length < n
            ? (r.copy(g, n - r.length), g)
            : r.slice(-n)
        );
      }
      function t(r) {
        if (!Buffer.isBuffer(r))
          if (Array.isArray(r)) r = Buffer.from(r);
          else if ("string" == typeof r)
            r = c(r)
              ? Buffer.from(
                  (function l(r) {
                    return r.length % 2 ? "0" + r : r;
                  })(p(r)),
                  "hex"
                )
              : Buffer.from(r);
          else if ("number" == typeof r) r = intToBuffer(r);
          else if (null == r) r = Buffer.allocUnsafe(0);
          else if (m.isBN(r)) r = r.toArrayLike(Buffer);
          else {
            if (!r.toArray) throw new Error("invalid type");
            r = Buffer.from(r.toArray());
          }
        return r;
      }
      function c(r) {
        return "string" == typeof r && r.match(/^0x[0-9A-Fa-f]*$/);
      }
      function p(r) {
        return "string" == typeof r && r.startsWith("0x") ? r.slice(2) : r;
      }
      I.exports = {
        zeros: u,
        setLength: f,
        setLengthRight: function h(r, n) {
          return f(r, n, !0);
        },
        isHexString: c,
        stripHexPrefix: p,
        toBuffer: t,
        bufferToHex: function i(r) {
          return "0x" + (r = t(r)).toString("hex");
        },
        keccak: function o(r, n) {
          return (
            (r = t(r)),
            n || (n = 256),
            e("keccak" + n)
              .update(r)
              .digest()
          );
        },
      };
    },
    8167: (I) => {
      function s(r) {
        (this.mode = e.MODE_8BIT_BYTE), (this.data = r), (this.parsedData = []);
        for (var n = 0, a = this.data.length; n < a; n++) {
          var g = [],
            y = this.data.charCodeAt(n);
          y > 65536
            ? ((g[0] = 240 | ((1835008 & y) >>> 18)),
              (g[1] = 128 | ((258048 & y) >>> 12)),
              (g[2] = 128 | ((4032 & y) >>> 6)),
              (g[3] = 128 | (63 & y)))
            : y > 2048
            ? ((g[0] = 224 | ((61440 & y) >>> 12)),
              (g[1] = 128 | ((4032 & y) >>> 6)),
              (g[2] = 128 | (63 & y)))
            : y > 128
            ? ((g[0] = 192 | ((1984 & y) >>> 6)), (g[1] = 128 | (63 & y)))
            : (g[0] = y),
            this.parsedData.push(g);
        }
        (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
          this.parsedData.length != this.data.length &&
            (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239));
      }
      function d(r, n) {
        (this.typeNumber = r),
          (this.errorCorrectLevel = n),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      (s.prototype = {
        getLength: function (r) {
          return this.parsedData.length;
        },
        write: function (r) {
          for (var n = 0, a = this.parsedData.length; n < a; n++)
            r.put(this.parsedData[n], 8);
        },
      }),
        (d.prototype = {
          addData: function (r) {
            var n = new s(r);
            this.dataList.push(n), (this.dataCache = null);
          },
          isDark: function (r, n) {
            if (
              r < 0 ||
              this.moduleCount <= r ||
              n < 0 ||
              this.moduleCount <= n
            )
              throw new Error(r + "," + n);
            return this.modules[r][n];
          },
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.makeImpl(!1, this.getBestMaskPattern());
          },
          makeImpl: function (r, n) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var a = 0; a < this.moduleCount; a++) {
              this.modules[a] = new Array(this.moduleCount);
              for (var g = 0; g < this.moduleCount; g++)
                this.modules[a][g] = null;
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(r, n),
              this.typeNumber >= 7 && this.setupTypeNumber(r),
              null == this.dataCache &&
                (this.dataCache = d.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList
                )),
              this.mapData(this.dataCache, n);
          },
          setupPositionProbePattern: function (r, n) {
            for (var a = -1; a <= 7; a++)
              if (!(r + a <= -1 || this.moduleCount <= r + a))
                for (var g = -1; g <= 7; g++)
                  n + g <= -1 ||
                    this.moduleCount <= n + g ||
                    (this.modules[r + a][n + g] =
                      (0 <= a && a <= 6 && (0 == g || 6 == g)) ||
                      (0 <= g && g <= 6 && (0 == a || 6 == a)) ||
                      (2 <= a && a <= 4 && 2 <= g && g <= 4));
          },
          getBestMaskPattern: function () {
            for (var r = 0, n = 0, a = 0; a < 8; a++) {
              this.makeImpl(!0, a);
              var g = f.getLostPoint(this);
              (0 == a || r > g) && ((r = g), (n = a));
            }
            return n;
          },
          createMovieClip: function (r, n, a) {
            var g = r.createEmptyMovieClip(n, a);
            this.make();
            for (var _ = 0; _ < this.modules.length; _++)
              for (var v = 1 * _, b = 0; b < this.modules[_].length; b++) {
                var E = 1 * b;
                this.modules[_][b] &&
                  (g.beginFill(0, 100),
                  g.moveTo(E, v),
                  g.lineTo(E + 1, v),
                  g.lineTo(E + 1, v + 1),
                  g.lineTo(E, v + 1),
                  g.endFill());
              }
            return g;
          },
          setupTimingPattern: function () {
            for (var r = 8; r < this.moduleCount - 8; r++)
              null == this.modules[r][6] && (this.modules[r][6] = r % 2 == 0);
            for (var n = 8; n < this.moduleCount - 8; n++)
              null == this.modules[6][n] && (this.modules[6][n] = n % 2 == 0);
          },
          setupPositionAdjustPattern: function () {
            for (
              var r = f.getPatternPosition(this.typeNumber), n = 0;
              n < r.length;
              n++
            )
              for (var a = 0; a < r.length; a++) {
                var g = r[n],
                  y = r[a];
                if (null == this.modules[g][y])
                  for (var _ = -2; _ <= 2; _++)
                    for (var v = -2; v <= 2; v++)
                      this.modules[g + _][y + v] =
                        -2 == _ ||
                        2 == _ ||
                        -2 == v ||
                        2 == v ||
                        (0 == _ && 0 == v);
              }
          },
          setupTypeNumber: function (r) {
            for (
              var n = f.getBCHTypeNumber(this.typeNumber), a = 0;
              a < 18;
              a++
            ) {
              var g = !r && 1 == ((n >> a) & 1);
              this.modules[Math.floor(a / 3)][
                (a % 3) + this.moduleCount - 8 - 3
              ] = g;
            }
            for (a = 0; a < 18; a++)
              (g = !r && 1 == ((n >> a) & 1)),
                (this.modules[(a % 3) + this.moduleCount - 8 - 3][
                  Math.floor(a / 3)
                ] = g);
          },
          setupTypeInfo: function (r, n) {
            for (
              var g = f.getBCHTypeInfo((this.errorCorrectLevel << 3) | n),
                y = 0;
              y < 15;
              y++
            ) {
              var _ = !r && 1 == ((g >> y) & 1);
              y < 6
                ? (this.modules[y][8] = _)
                : y < 8
                ? (this.modules[y + 1][8] = _)
                : (this.modules[this.moduleCount - 15 + y][8] = _);
            }
            for (y = 0; y < 15; y++)
              (_ = !r && 1 == ((g >> y) & 1)),
                y < 8
                  ? (this.modules[8][this.moduleCount - y - 1] = _)
                  : y < 9
                  ? (this.modules[8][15 - y - 1 + 1] = _)
                  : (this.modules[8][15 - y - 1] = _);
            this.modules[this.moduleCount - 8][8] = !r;
          },
          mapData: function (r, n) {
            for (
              var a = -1,
                g = this.moduleCount - 1,
                y = 7,
                _ = 0,
                v = this.moduleCount - 1;
              v > 0;
              v -= 2
            )
              for (6 == v && v--; ; ) {
                for (var b = 0; b < 2; b++)
                  if (null == this.modules[g][v - b]) {
                    var E = !1;
                    _ < r.length && (E = 1 == ((r[_] >>> y) & 1)),
                      f.getMask(n, g, v - b) && (E = !E),
                      (this.modules[g][v - b] = E),
                      -1 == --y && (_++, (y = 7));
                  }
                if ((g += a) < 0 || this.moduleCount <= g) {
                  (g -= a), (a = -a);
                  break;
                }
              }
          },
        }),
        (d.PAD0 = 236),
        (d.PAD1 = 17),
        (d.createData = function (r, n, a) {
          for (
            var g = o.getRSBlocks(r, n), y = new l(), _ = 0;
            _ < a.length;
            _++
          ) {
            var v = a[_];
            y.put(v.mode, 4),
              y.put(v.getLength(), f.getLengthInBits(v.mode, r)),
              v.write(y);
          }
          var b = 0;
          for (_ = 0; _ < g.length; _++) b += g[_].dataCount;
          if (y.getLengthInBits() > 8 * b)
            throw new Error(
              "code length overflow. (" +
                y.getLengthInBits() +
                ">" +
                8 * b +
                ")"
            );
          for (
            y.getLengthInBits() + 4 <= 8 * b && y.put(0, 4);
            y.getLengthInBits() % 8 != 0;

          )
            y.putBit(!1);
          for (
            ;
            !(
              y.getLengthInBits() >= 8 * b ||
              (y.put(d.PAD0, 8), y.getLengthInBits() >= 8 * b)
            );

          )
            y.put(d.PAD1, 8);
          return d.createBytes(y, g);
        }),
        (d.createBytes = function (r, n) {
          for (
            var a = 0,
              g = 0,
              y = 0,
              _ = new Array(n.length),
              v = new Array(n.length),
              b = 0;
            b < n.length;
            b++
          ) {
            var E = n[b].dataCount,
              w = n[b].totalCount - E;
            (g = Math.max(g, E)), (y = Math.max(y, w)), (_[b] = new Array(E));
            for (var S = 0; S < _[b].length; S++)
              _[b][S] = 255 & r.buffer[S + a];
            a += E;
            var T = f.getErrorCorrectPolynomial(w),
              x = new i(_[b], T.getLength() - 1).mod(T);
            for (
              v[b] = new Array(T.getLength() - 1), S = 0;
              S < v[b].length;
              S++
            ) {
              var $ = S + x.getLength() - v[b].length;
              v[b][S] = $ >= 0 ? x.get($) : 0;
            }
          }
          var G = 0;
          for (S = 0; S < n.length; S++) G += n[S].totalCount;
          var re = new Array(G),
            le = 0;
          for (S = 0; S < g; S++)
            for (b = 0; b < n.length; b++)
              S < _[b].length && (re[le++] = _[b][S]);
          for (S = 0; S < y; S++)
            for (b = 0; b < n.length; b++)
              S < v[b].length && (re[le++] = v[b][S]);
          return re;
        });
      for (
        var e = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8,
          },
          m = { L: 1, M: 0, Q: 3, H: 2 },
          u = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7,
          },
          f = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (r) {
              for (
                var n = r << 10;
                f.getBCHDigit(n) - f.getBCHDigit(f.G15) >= 0;

              )
                n ^= f.G15 << (f.getBCHDigit(n) - f.getBCHDigit(f.G15));
              return ((r << 10) | n) ^ f.G15_MASK;
            },
            getBCHTypeNumber: function (r) {
              for (
                var n = r << 12;
                f.getBCHDigit(n) - f.getBCHDigit(f.G18) >= 0;

              )
                n ^= f.G18 << (f.getBCHDigit(n) - f.getBCHDigit(f.G18));
              return (r << 12) | n;
            },
            getBCHDigit: function (r) {
              for (var n = 0; 0 != r; ) n++, (r >>>= 1);
              return n;
            },
            getPatternPosition: function (r) {
              return f.PATTERN_POSITION_TABLE[r - 1];
            },
            getMask: function (r, n, a) {
              switch (r) {
                case u.PATTERN000:
                  return (n + a) % 2 == 0;
                case u.PATTERN001:
                  return n % 2 == 0;
                case u.PATTERN010:
                  return a % 3 == 0;
                case u.PATTERN011:
                  return (n + a) % 3 == 0;
                case u.PATTERN100:
                  return (Math.floor(n / 2) + Math.floor(a / 3)) % 2 == 0;
                case u.PATTERN101:
                  return ((n * a) % 2) + ((n * a) % 3) == 0;
                case u.PATTERN110:
                  return (((n * a) % 2) + ((n * a) % 3)) % 2 == 0;
                case u.PATTERN111:
                  return (((n * a) % 3) + ((n + a) % 2)) % 2 == 0;
                default:
                  throw new Error("bad maskPattern:" + r);
              }
            },
            getErrorCorrectPolynomial: function (r) {
              for (var n = new i([1], 0), a = 0; a < r; a++)
                n = n.multiply(new i([1, h.gexp(a)], 0));
              return n;
            },
            getLengthInBits: function (r, n) {
              if (1 <= n && n < 10)
                switch (r) {
                  case e.MODE_NUMBER:
                    return 10;
                  case e.MODE_ALPHA_NUM:
                    return 9;
                  case e.MODE_8BIT_BYTE:
                  case e.MODE_KANJI:
                    return 8;
                  default:
                    throw new Error("mode:" + r);
                }
              else if (n < 27)
                switch (r) {
                  case e.MODE_NUMBER:
                    return 12;
                  case e.MODE_ALPHA_NUM:
                    return 11;
                  case e.MODE_8BIT_BYTE:
                    return 16;
                  case e.MODE_KANJI:
                    return 10;
                  default:
                    throw new Error("mode:" + r);
                }
              else {
                if (!(n < 41)) throw new Error("type:" + n);
                switch (r) {
                  case e.MODE_NUMBER:
                    return 14;
                  case e.MODE_ALPHA_NUM:
                    return 13;
                  case e.MODE_8BIT_BYTE:
                    return 16;
                  case e.MODE_KANJI:
                    return 12;
                  default:
                    throw new Error("mode:" + r);
                }
              }
            },
            getLostPoint: function (r) {
              for (var n = r.getModuleCount(), a = 0, g = 0; g < n; g++)
                for (var y = 0; y < n; y++) {
                  for (var _ = 0, v = r.isDark(g, y), b = -1; b <= 1; b++)
                    if (!(g + b < 0 || n <= g + b))
                      for (var E = -1; E <= 1; E++)
                        y + E < 0 ||
                          n <= y + E ||
                          (0 == b && 0 == E) ||
                          (v == r.isDark(g + b, y + E) && _++);
                  _ > 5 && (a += 3 + _ - 5);
                }
              for (g = 0; g < n - 1; g++)
                for (y = 0; y < n - 1; y++) {
                  var w = 0;
                  r.isDark(g, y) && w++,
                    r.isDark(g + 1, y) && w++,
                    r.isDark(g, y + 1) && w++,
                    r.isDark(g + 1, y + 1) && w++,
                    (0 == w || 4 == w) && (a += 3);
                }
              for (g = 0; g < n; g++)
                for (y = 0; y < n - 6; y++)
                  r.isDark(g, y) &&
                    !r.isDark(g, y + 1) &&
                    r.isDark(g, y + 2) &&
                    r.isDark(g, y + 3) &&
                    r.isDark(g, y + 4) &&
                    !r.isDark(g, y + 5) &&
                    r.isDark(g, y + 6) &&
                    (a += 40);
              for (y = 0; y < n; y++)
                for (g = 0; g < n - 6; g++)
                  r.isDark(g, y) &&
                    !r.isDark(g + 1, y) &&
                    r.isDark(g + 2, y) &&
                    r.isDark(g + 3, y) &&
                    r.isDark(g + 4, y) &&
                    !r.isDark(g + 5, y) &&
                    r.isDark(g + 6, y) &&
                    (a += 40);
              var S = 0;
              for (y = 0; y < n; y++)
                for (g = 0; g < n; g++) r.isDark(g, y) && S++;
              return a + (Math.abs((100 * S) / n / n - 50) / 5) * 10;
            },
          },
          h = {
            glog: function (r) {
              if (r < 1) throw new Error("glog(" + r + ")");
              return h.LOG_TABLE[r];
            },
            gexp: function (r) {
              for (; r < 0; ) r += 255;
              for (; r >= 256; ) r -= 255;
              return h.EXP_TABLE[r];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          t = 0;
        t < 8;
        t++
      )
        h.EXP_TABLE[t] = 1 << t;
      for (t = 8; t < 256; t++)
        h.EXP_TABLE[t] =
          h.EXP_TABLE[t - 4] ^
          h.EXP_TABLE[t - 5] ^
          h.EXP_TABLE[t - 6] ^
          h.EXP_TABLE[t - 8];
      for (t = 0; t < 255; t++) h.LOG_TABLE[h.EXP_TABLE[t]] = t;
      function i(r, n) {
        if (null == r.length) throw new Error(r.length + "/" + n);
        for (var a = 0; a < r.length && 0 == r[a]; ) a++;
        this.num = new Array(r.length - a + n);
        for (var g = 0; g < r.length - a; g++) this.num[g] = r[g + a];
      }
      function o(r, n) {
        (this.totalCount = r), (this.dataCount = n);
      }
      function l() {
        (this.buffer = []), (this.length = 0);
      }
      (i.prototype = {
        get: function (r) {
          return this.num[r];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (r) {
          for (
            var n = new Array(this.getLength() + r.getLength() - 1), a = 0;
            a < this.getLength();
            a++
          )
            for (var g = 0; g < r.getLength(); g++)
              n[a + g] ^= h.gexp(h.glog(this.get(a)) + h.glog(r.get(g)));
          return new i(n, 0);
        },
        mod: function (r) {
          if (this.getLength() - r.getLength() < 0) return this;
          for (
            var n = h.glog(this.get(0)) - h.glog(r.get(0)),
              a = new Array(this.getLength()),
              g = 0;
            g < this.getLength();
            g++
          )
            a[g] = this.get(g);
          for (g = 0; g < r.getLength(); g++)
            a[g] ^= h.gexp(h.glog(r.get(g)) + n);
          return new i(a, 0).mod(r);
        },
      }),
        (o.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
        (o.getRSBlocks = function (r, n) {
          var a = o.getRsBlockTable(r, n);
          if (null == a)
            throw new Error(
              "bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + n
            );
          for (var g = a.length / 3, y = [], _ = 0; _ < g; _++)
            for (
              var v = a[3 * _ + 0], b = a[3 * _ + 1], E = a[3 * _ + 2], w = 0;
              w < v;
              w++
            )
              y.push(new o(b, E));
          return y;
        }),
        (o.getRsBlockTable = function (r, n) {
          switch (n) {
            case m.L:
              return o.RS_BLOCK_TABLE[4 * (r - 1) + 0];
            case m.M:
              return o.RS_BLOCK_TABLE[4 * (r - 1) + 1];
            case m.Q:
              return o.RS_BLOCK_TABLE[4 * (r - 1) + 2];
            case m.H:
              return o.RS_BLOCK_TABLE[4 * (r - 1) + 3];
            default:
              return;
          }
        }),
        (l.prototype = {
          get: function (r) {
            var n = Math.floor(r / 8);
            return 1 == ((this.buffer[n] >>> (7 - (r % 8))) & 1);
          },
          put: function (r, n) {
            for (var a = 0; a < n; a++)
              this.putBit(1 == ((r >>> (n - a - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (r) {
            var n = Math.floor(this.length / 8);
            this.buffer.length <= n && this.buffer.push(0),
              r && (this.buffer[n] |= 128 >>> this.length % 8),
              this.length++;
          },
        });
      var c = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273],
      ];
      function p(r) {
        if (
          ((this.options = {
            padding: 4,
            width: 256,
            height: 256,
            typeNumber: 4,
            color: "#000000",
            background: "#ffffff",
            ecl: "M",
            image: { svg: "", width: 0, height: 0 },
          }),
          "string" == typeof r && (r = { content: r }),
          r)
        )
          for (var a in r) this.options[a] = r[a];
        if ("string" != typeof this.options.content)
          throw new Error("Expected 'content' as string!");
        if (0 === this.options.content.length)
          throw new Error("Expected 'content' to be non-empty!");
        if (!(this.options.padding >= 0))
          throw new Error("Expected 'padding' value to be non-negative!");
        if (!(this.options.width > 0 && this.options.height > 0))
          throw new Error(
            "Expected 'width' or 'height' value to be higher than zero!"
          );
        var v = this.options.content,
          b = (function y(w, S) {
            for (
              var T = (function _(w) {
                  var S = encodeURI(w)
                    .toString()
                    .replace(/\%[0-9a-fA-F]{2}/g, "a");
                  return S.length + (S.length != w ? 3 : 0);
                })(w),
                k = 1,
                x = 0,
                $ = 0,
                G = c.length;
              $ <= G;
              $++
            ) {
              var re = c[$];
              if (!re)
                throw new Error(
                  "Content too long: expected " + x + " but got " + T
                );
              switch (S) {
                case "L":
                  x = re[0];
                  break;
                case "M":
                  x = re[1];
                  break;
                case "Q":
                  x = re[2];
                  break;
                case "H":
                  x = re[3];
                  break;
                default:
                  throw new Error("Unknwon error correction level: " + S);
              }
              if (T <= x) break;
              k++;
            }
            if (k > c.length) throw new Error("Content too long");
            return k;
          })(v, this.options.ecl),
          E = (function g(w) {
            switch (w) {
              case "L":
                return m.L;
              case "M":
                return m.M;
              case "Q":
                return m.Q;
              case "H":
                return m.H;
              default:
                throw new Error("Unknwon error correction level: " + w);
            }
          })(this.options.ecl);
        (this.qrcode = new d(b, E)), this.qrcode.addData(v), this.qrcode.make();
      }
      (p.prototype.svg = function (r) {
        var n = this.options || {},
          a = this.qrcode.modules;
        typeof r > "u" && (r = { container: n.container || "svg" });
        for (
          var g = !(typeof n.pretty < "u" && !n.pretty),
            y = g ? "  " : "",
            _ = g ? "\r\n" : "",
            v = n.width,
            b = n.height,
            E = a.length,
            w = v / (E + 2 * n.padding),
            S = b / (E + 2 * n.padding),
            T = typeof n.join < "u" && !!n.join,
            k = typeof n.swap < "u" && !!n.swap,
            x = !(typeof n.xmlDeclaration < "u" && !n.xmlDeclaration),
            $ = typeof n.predefined < "u" && !!n.predefined,
            G = $
              ? y +
                '<defs><path id="qrmodule" d="M0 0 h' +
                S +
                " v" +
                w +
                ' H0 z" style="fill:' +
                n.color +
                ';shape-rendering:crispEdges;" /></defs>' +
                _
              : "",
            re =
              y +
              '<rect x="0" y="0" width="' +
              v +
              '" height="' +
              b +
              '" style="fill:' +
              n.background +
              ';shape-rendering:crispEdges;"/>' +
              _,
            le = "",
            Y = "",
            Q = 0;
          Q < E;
          Q++
        )
          for (var X = 0; X < E; X++)
            if (a[X][Q]) {
              var z = X * w + n.padding * w,
                K = Q * S + n.padding * S;
              if (k) {
                var H = z;
                (z = K), (K = H);
              }
              if (T) {
                var W = w + z,
                  V = S + K;
                (z = Number.isInteger(z) ? Number(z) : z.toFixed(2)),
                  (K = Number.isInteger(K) ? Number(K) : K.toFixed(2)),
                  (W = Number.isInteger(W) ? Number(W) : W.toFixed(2)),
                  (Y +=
                    "M" +
                    z +
                    "," +
                    K +
                    " V" +
                    (V = Number.isInteger(V) ? Number(V) : V.toFixed(2)) +
                    " H" +
                    W +
                    " V" +
                    K +
                    " H" +
                    z +
                    " Z ");
              } else
                le += $
                  ? y +
                    '<use x="' +
                    z.toString() +
                    '" y="' +
                    K.toString() +
                    '" href="#qrmodule" />' +
                    _
                  : y +
                    '<rect x="' +
                    z.toString() +
                    '" y="' +
                    K.toString() +
                    '" width="' +
                    w +
                    '" height="' +
                    S +
                    '" style="fill:' +
                    n.color +
                    ';shape-rendering:crispEdges;"/>' +
                    _;
            }
        T &&
          (le =
            y +
            '<path x="0" y="0" style="fill:' +
            n.color +
            ';shape-rendering:crispEdges;" d="' +
            Y +
            '" />');
        let ee = "";
        if (void 0 !== this.options.image && this.options.image.svg) {
          const ue = (v * this.options.image.width) / 100,
            ce = (b * this.options.image.height) / 100;
          (ee += `<svg x="${v / 2 - ue / 2}" y="${
            b / 2 - ce / 2
          }" width="${ue}" height="${ce}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`),
            (ee += this.options.image.svg + _),
            (ee += "</svg>");
        }
        var ie = "";
        switch (r.container) {
          case "svg":
            x && (ie += '<?xml version="1.0" standalone="yes"?>' + _),
              (ie +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                v +
                '" height="' +
                b +
                '">' +
                _),
              (ie += G + re + le),
              (ie += ee),
              (ie += "</svg>");
            break;
          case "svg-viewbox":
            x && (ie += '<?xml version="1.0" standalone="yes"?>' + _),
              (ie +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
                v +
                " " +
                b +
                '">' +
                _),
              (ie += G + re + le),
              (ie += ee),
              (ie += "</svg>");
            break;
          case "g":
            (ie += '<g width="' + v + '" height="' + b + '">' + _),
              (ie += G + re + le),
              (ie += ee),
              (ie += "</g>");
            break;
          default:
            ie += (G + re + le + ee).replace(/^\s+/, "");
        }
        return ie;
      }),
        (I.exports = p);
    },
    7938: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.LIB_VERSION = void 0),
        (s.LIB_VERSION = "3.9.3");
    },
    9424: (I) => {
      "use strict";
      var s = Object.prototype.hasOwnProperty,
        d = "~";
      function e() {}
      function m(t, i, o) {
        (this.fn = t), (this.context = i), (this.once = o || !1);
      }
      function u(t, i, o, l, c) {
        if ("function" != typeof o)
          throw new TypeError("The listener must be a function");
        var p = new m(o, l || t, c),
          r = d ? d + i : i;
        return (
          t._events[r]
            ? t._events[r].fn
              ? (t._events[r] = [t._events[r], p])
              : t._events[r].push(p)
            : ((t._events[r] = p), t._eventsCount++),
          t
        );
      }
      function f(t, i) {
        0 == --t._eventsCount ? (t._events = new e()) : delete t._events[i];
      }
      function h() {
        (this._events = new e()), (this._eventsCount = 0);
      }
      Object.create &&
        ((e.prototype = Object.create(null)), new e().__proto__ || (d = !1)),
        (h.prototype.eventNames = function () {
          var o,
            l,
            i = [];
          if (0 === this._eventsCount) return i;
          for (l in (o = this._events))
            s.call(o, l) && i.push(d ? l.slice(1) : l);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(o))
            : i;
        }),
        (h.prototype.listeners = function (i) {
          var l = this._events[d ? d + i : i];
          if (!l) return [];
          if (l.fn) return [l.fn];
          for (var c = 0, p = l.length, r = new Array(p); c < p; c++)
            r[c] = l[c].fn;
          return r;
        }),
        (h.prototype.listenerCount = function (i) {
          var l = this._events[d ? d + i : i];
          return l ? (l.fn ? 1 : l.length) : 0;
        }),
        (h.prototype.emit = function (i, o, l, c, p, r) {
          var n = d ? d + i : i;
          if (!this._events[n]) return !1;
          var y,
            _,
            a = this._events[n],
            g = arguments.length;
          if (a.fn) {
            switch ((a.once && this.removeListener(i, a.fn, void 0, !0), g)) {
              case 1:
                return a.fn.call(a.context), !0;
              case 2:
                return a.fn.call(a.context, o), !0;
              case 3:
                return a.fn.call(a.context, o, l), !0;
              case 4:
                return a.fn.call(a.context, o, l, c), !0;
              case 5:
                return a.fn.call(a.context, o, l, c, p), !0;
              case 6:
                return a.fn.call(a.context, o, l, c, p, r), !0;
            }
            for (_ = 1, y = new Array(g - 1); _ < g; _++)
              y[_ - 1] = arguments[_];
            a.fn.apply(a.context, y);
          } else {
            var b,
              v = a.length;
            for (_ = 0; _ < v; _++)
              switch (
                (a[_].once && this.removeListener(i, a[_].fn, void 0, !0), g)
              ) {
                case 1:
                  a[_].fn.call(a[_].context);
                  break;
                case 2:
                  a[_].fn.call(a[_].context, o);
                  break;
                case 3:
                  a[_].fn.call(a[_].context, o, l);
                  break;
                case 4:
                  a[_].fn.call(a[_].context, o, l, c);
                  break;
                default:
                  if (!y)
                    for (b = 1, y = new Array(g - 1); b < g; b++)
                      y[b - 1] = arguments[b];
                  a[_].fn.apply(a[_].context, y);
              }
          }
          return !0;
        }),
        (h.prototype.on = function (i, o, l) {
          return u(this, i, o, l, !1);
        }),
        (h.prototype.once = function (i, o, l) {
          return u(this, i, o, l, !0);
        }),
        (h.prototype.removeListener = function (i, o, l, c) {
          var p = d ? d + i : i;
          if (!this._events[p]) return this;
          if (!o) return f(this, p), this;
          var r = this._events[p];
          if (r.fn)
            r.fn === o &&
              (!c || r.once) &&
              (!l || r.context === l) &&
              f(this, p);
          else {
            for (var n = 0, a = [], g = r.length; n < g; n++)
              (r[n].fn !== o ||
                (c && !r[n].once) ||
                (l && r[n].context !== l)) &&
                a.push(r[n]);
            a.length
              ? (this._events[p] = 1 === a.length ? a[0] : a)
              : f(this, p);
          }
          return this;
        }),
        (h.prototype.removeAllListeners = function (i) {
          var o;
          return (
            i
              ? this._events[(o = d ? d + i : i)] && f(this, o)
              : ((this._events = new e()), (this._eventsCount = 0)),
            this
          );
        }),
        (h.prototype.off = h.prototype.removeListener),
        (h.prototype.addListener = h.prototype.on),
        (h.prefixed = d),
        (h.EventEmitter = h),
        (I.exports = h);
    },
    2753: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
      const e = d(2016);
      function m(h, t, i) {
        try {
          Reflect.apply(h, t, i);
        } catch (o) {
          setTimeout(() => {
            throw o;
          });
        }
      }
      s.default = class f extends e.EventEmitter {
        emit(t, ...i) {
          let o = "error" === t;
          const l = this._events;
          if (void 0 !== l) o = o && void 0 === l.error;
          else if (!o) return !1;
          if (o) {
            let p;
            if ((i.length > 0 && ([p] = i), p instanceof Error)) throw p;
            const r = new Error(
              "Unhandled error." + (p ? ` (${p.message})` : "")
            );
            throw ((r.context = p), r);
          }
          const c = l[t];
          if (void 0 === c) return !1;
          if ("function" == typeof c) m(c, this, i);
          else {
            const p = c.length,
              r = (function u(h) {
                const t = h.length,
                  i = new Array(t);
                for (let o = 0; o < t; o += 1) i[o] = h[o];
                return i;
              })(c);
            for (let n = 0; n < p; n += 1) m(r[n], this, i);
          }
          return !0;
        }
      };
    },
    3689: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.assertExhaustive =
          s.assertStruct =
          s.assert =
          s.AssertionError =
            void 0);
      const e = d(3921);
      function h(c, p) {
        return (function u(c) {
          var p, r;
          return (
            "string" ==
            typeof (null ===
              (r =
                null === (p = c?.prototype) || void 0 === p
                  ? void 0
                  : p.constructor) || void 0 === r
              ? void 0
              : r.name)
          );
        })(c)
          ? new c({ message: p })
          : c({ message: p });
      }
      class t extends Error {
        constructor(p) {
          super(p.message), (this.code = "ERR_ASSERTION");
        }
      }
      (s.AssertionError = t),
        (s.assert = function i(c, p = "Assertion failed.", r = t) {
          if (!c) throw p instanceof Error ? p : h(r, p);
        }),
        (s.assertStruct = function o(c, p, r = "Assertion failed", n = t) {
          try {
            (0, e.assert)(c, p);
          } catch (a) {
            throw h(
              n,
              `${r}: ${(function f(c) {
                const p = (function m(c) {
                  return "object" == typeof c && null !== c && "message" in c;
                })(c)
                  ? c.message
                  : String(c);
                return p.endsWith(".") ? p.slice(0, -1) : p;
              })(a)}.`
            );
          }
        }),
        (s.assertExhaustive = function l(c) {
          throw new Error(
            "Invalid branch reached. Should be detected during compilation."
          );
        });
    },
    3845: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.base64 = void 0);
      const e = d(3921),
        m = d(3689);
      s.base64 = (f, h = {}) => {
        var t, i;
        const o = null !== (t = h.paddingRequired) && void 0 !== t && t,
          l = null !== (i = h.characterSet) && void 0 !== i ? i : "base64";
        let c, p;
        return (
          "base64" === l
            ? (c = String.raw`[A-Za-z0-9+\/]`)
            : ((0, m.assert)("base64url" === l),
              (c = String.raw`[-_A-Za-z0-9]`)),
          (p = o
            ? new RegExp(`^(?:${c}{4})*(?:${c}{3}=|${c}{2}==)?$`, "u")
            : new RegExp(
                `^(?:${c}{4})*(?:${c}{2,3}|${c}{3}=|${c}{2}==)?$`,
                "u"
              )),
          (0, e.pattern)(f, p)
        );
      };
    },
    6468: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.createDataView =
          s.concatBytes =
          s.valueToBytes =
          s.stringToBytes =
          s.numberToBytes =
          s.signedBigIntToBytes =
          s.bigIntToBytes =
          s.hexToBytes =
          s.bytesToString =
          s.bytesToNumber =
          s.bytesToSignedBigInt =
          s.bytesToBigInt =
          s.bytesToHex =
          s.assertIsBytes =
          s.isBytes =
            void 0);
      const e = d(3689),
        m = d(1506),
        u = 48,
        f = 58,
        h = 87,
        i = (function t() {
          const k = [];
          return () => {
            if (0 === k.length)
              for (let x = 0; x < 256; x++)
                k.push(x.toString(16).padStart(2, "0"));
            return k;
          };
        })();
      function o(k) {
        return k instanceof Uint8Array;
      }
      function l(k) {
        (0, e.assert)(o(k), "Value must be a Uint8Array.");
      }
      function c(k) {
        if ((l(k), 0 === k.length)) return "0x";
        const x = i(),
          $ = new Array(k.length);
        for (let G = 0; G < k.length; G++) $[G] = x[k[G]];
        return (0, m.add0x)($.join(""));
      }
      function p(k) {
        l(k);
        const x = c(k);
        return BigInt(x);
      }
      function g(k) {
        var x;
        if (
          "0x" ===
          (null === (x = k?.toLowerCase) || void 0 === x ? void 0 : x.call(k))
        )
          return new Uint8Array();
        (0, m.assertIsHexString)(k);
        const $ = (0, m.remove0x)(k).toLowerCase(),
          G = $.length % 2 == 0 ? $ : `0${$}`,
          re = new Uint8Array(G.length / 2);
        for (let le = 0; le < re.length; le++) {
          const Y = G.charCodeAt(2 * le),
            Q = G.charCodeAt(2 * le + 1);
          re[le] = 16 * (Y - (Y < f ? u : h)) + (Q - (Q < f ? u : h));
        }
        return re;
      }
      function y(k) {
        return (
          (0, e.assert)("bigint" == typeof k, "Value must be a bigint."),
          (0, e.assert)(k >= BigInt(0), "Value must be a non-negative bigint."),
          g(k.toString(16))
        );
      }
      function b(k) {
        return (
          (0, e.assert)("number" == typeof k, "Value must be a number."),
          (0, e.assert)(k >= 0, "Value must be a non-negative number."),
          (0, e.assert)(
            Number.isSafeInteger(k),
            "Value is not a safe integer. Use `bigIntToBytes` instead."
          ),
          g(k.toString(16))
        );
      }
      function E(k) {
        return (
          (0, e.assert)("string" == typeof k, "Value must be a string."),
          new TextEncoder().encode(k)
        );
      }
      function w(k) {
        if ("bigint" == typeof k) return y(k);
        if ("number" == typeof k) return b(k);
        if ("string" == typeof k) return k.startsWith("0x") ? g(k) : E(k);
        if (o(k)) return k;
        throw new TypeError(`Unsupported value type: "${typeof k}".`);
      }
      (s.isBytes = o),
        (s.assertIsBytes = l),
        (s.bytesToHex = c),
        (s.bytesToBigInt = p),
        (s.bytesToSignedBigInt = function r(k) {
          l(k);
          let x = BigInt(0);
          for (const $ of k) x = (x << BigInt(8)) + BigInt($);
          return BigInt.asIntN(8 * k.length, x);
        }),
        (s.bytesToNumber = function n(k) {
          l(k);
          const x = p(k);
          return (
            (0, e.assert)(
              x <= BigInt(Number.MAX_SAFE_INTEGER),
              "Number is not a safe integer. Use `bytesToBigInt` instead."
            ),
            Number(x)
          );
        }),
        (s.bytesToString = function a(k) {
          return l(k), new TextDecoder().decode(k);
        }),
        (s.hexToBytes = g),
        (s.bigIntToBytes = y),
        (s.signedBigIntToBytes = function v(k, x) {
          (0, e.assert)("bigint" == typeof k, "Value must be a bigint."),
            (0, e.assert)(
              "number" == typeof x,
              "Byte length must be a number."
            ),
            (0, e.assert)(x > 0, "Byte length must be greater than 0."),
            (0, e.assert)(
              (function _(k, x) {
                (0, e.assert)(x > 0);
                const $ = k >> BigInt(31);
                return !(((~k & $) + (k & ~$)) >> BigInt(8 * x - 1));
              })(k, x),
              "Byte length is too small to represent the given value."
            );
          let $ = k;
          const G = new Uint8Array(x);
          for (let re = 0; re < G.length; re++)
            (G[re] = Number(BigInt.asUintN(8, $))), ($ >>= BigInt(8));
          return G.reverse();
        }),
        (s.numberToBytes = b),
        (s.stringToBytes = E),
        (s.valueToBytes = w),
        (s.concatBytes = function S(k) {
          const x = new Array(k.length);
          let $ = 0;
          for (let re = 0; re < k.length; re++) {
            const le = w(k[re]);
            (x[re] = le), ($ += le.length);
          }
          const G = new Uint8Array($);
          for (let re = 0, le = 0; re < x.length; re++)
            G.set(x[re], le), (le += x[re].length);
          return G;
        }),
        (s.createDataView = function T(k) {
          if (typeof Buffer < "u" && k instanceof Buffer) {
            const x = k.buffer.slice(k.byteOffset, k.byteOffset + k.byteLength);
            return new DataView(x);
          }
          return new DataView(k.buffer, k.byteOffset, k.byteLength);
        });
    },
    7634: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.ChecksumStruct = void 0);
      const e = d(3921),
        m = d(3845);
      s.ChecksumStruct = (0, e.size)(
        (0, m.base64)((0, e.string)(), { paddingRequired: !0 }),
        44,
        44
      );
    },
    8081: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.createHex =
          s.createBytes =
          s.createBigInt =
          s.createNumber =
            void 0);
      const e = d(3921),
        m = d(3689),
        u = d(6468),
        f = d(1506),
        h = (0, e.union)([
          (0, e.number)(),
          (0, e.bigint)(),
          (0, e.string)(),
          f.StrictHexStruct,
        ]),
        t = (0, e.coerce)((0, e.number)(), h, Number),
        i = (0, e.coerce)((0, e.bigint)(), h, BigInt),
        l =
          ((0, e.union)([f.StrictHexStruct, (0, e.instance)(Uint8Array)]),
          (0, e.coerce)(
            (0, e.instance)(Uint8Array),
            (0, e.union)([f.StrictHexStruct]),
            u.hexToBytes
          )),
        c = (0, e.coerce)(
          f.StrictHexStruct,
          (0, e.instance)(Uint8Array),
          u.bytesToHex
        );
      (s.createNumber = function p(g) {
        try {
          const y = (0, e.create)(g, t);
          return (
            (0, m.assert)(
              Number.isFinite(y),
              `Expected a number-like value, got "${g}".`
            ),
            y
          );
        } catch (y) {
          throw y instanceof e.StructError
            ? new Error(`Expected a number-like value, got "${g}".`)
            : y;
        }
      }),
        (s.createBigInt = function r(g) {
          try {
            return (0, e.create)(g, i);
          } catch (y) {
            throw y instanceof e.StructError
              ? new Error(
                  `Expected a number-like value, got "${String(y.value)}".`
                )
              : y;
          }
        }),
        (s.createBytes = function n(g) {
          if ("string" == typeof g && "0x" === g.toLowerCase())
            return new Uint8Array();
          try {
            return (0, e.create)(g, l);
          } catch (y) {
            throw y instanceof e.StructError
              ? new Error(
                  `Expected a bytes-like value, got "${String(y.value)}".`
                )
              : y;
          }
        }),
        (s.createHex = function a(g) {
          if (
            (g instanceof Uint8Array && 0 === g.length) ||
            ("string" == typeof g && "0x" === g.toLowerCase())
          )
            return "0x";
          try {
            return (0, e.create)(g, c);
          } catch (y) {
            throw y instanceof e.StructError
              ? new Error(
                  `Expected a bytes-like value, got "${String(y.value)}".`
                )
              : y;
          }
        });
    },
    6722: function (I, s) {
      "use strict";
      var m,
        u,
        d =
          (this && this.__classPrivateFieldSet) ||
          function (t, i, o, l, c) {
            if ("m" === l)
              throw new TypeError("Private method is not writable");
            if ("a" === l && !c)
              throw new TypeError(
                "Private accessor was defined without a setter"
              );
            if ("function" == typeof i ? t !== i || !c : !i.has(t))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === l ? c.call(t, o) : c ? (c.value = o) : i.set(t, o), o
            );
          },
        e =
          (this && this.__classPrivateFieldGet) ||
          function (t, i, o, l) {
            if ("a" === o && !l)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof i ? t !== i || !l : !i.has(t))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === o
              ? l
              : "a" === o
              ? l.call(t)
              : l
              ? l.value
              : i.get(t);
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.FrozenSet = s.FrozenMap = void 0);
      class f {
        constructor(i) {
          m.set(this, void 0), d(this, m, new Map(i), "f"), Object.freeze(this);
        }
        get size() {
          return e(this, m, "f").size;
        }
        [((m = new WeakMap()), Symbol.iterator)]() {
          return e(this, m, "f")[Symbol.iterator]();
        }
        entries() {
          return e(this, m, "f").entries();
        }
        forEach(i, o) {
          return e(this, m, "f").forEach((l, c, p) => i.call(o, l, c, this));
        }
        get(i) {
          return e(this, m, "f").get(i);
        }
        has(i) {
          return e(this, m, "f").has(i);
        }
        keys() {
          return e(this, m, "f").keys();
        }
        values() {
          return e(this, m, "f").values();
        }
        toString() {
          return `FrozenMap(${this.size}) {${
            this.size > 0
              ? ` ${[...this.entries()]
                  .map(([i, o]) => `${String(i)} => ${String(o)}`)
                  .join(", ")} `
              : ""
          }}`;
        }
      }
      s.FrozenMap = f;
      class h {
        constructor(i) {
          u.set(this, void 0), d(this, u, new Set(i), "f"), Object.freeze(this);
        }
        get size() {
          return e(this, u, "f").size;
        }
        [((u = new WeakMap()), Symbol.iterator)]() {
          return e(this, u, "f")[Symbol.iterator]();
        }
        entries() {
          return e(this, u, "f").entries();
        }
        forEach(i, o) {
          return e(this, u, "f").forEach((l, c, p) => i.call(o, l, c, this));
        }
        has(i) {
          return e(this, u, "f").has(i);
        }
        keys() {
          return e(this, u, "f").keys();
        }
        values() {
          return e(this, u, "f").values();
        }
        toString() {
          return `FrozenSet(${this.size}) {${
            this.size > 0
              ? ` ${[...this.values()].map((i) => String(i)).join(", ")} `
              : ""
          }}`;
        }
      }
      (s.FrozenSet = h),
        Object.freeze(f),
        Object.freeze(f.prototype),
        Object.freeze(h),
        Object.freeze(h.prototype);
    },
    3243: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
    },
    1506: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.remove0x =
          s.add0x =
          s.assertIsStrictHexString =
          s.assertIsHexString =
          s.isStrictHexString =
          s.isHexString =
          s.StrictHexStruct =
          s.HexStruct =
            void 0);
      const e = d(3921),
        m = d(3689);
      function u(l) {
        return (0, e.is)(l, s.HexStruct);
      }
      function f(l) {
        return (0, e.is)(l, s.StrictHexStruct);
      }
      (s.HexStruct = (0, e.pattern)((0, e.string)(), /^(?:0x)?[0-9a-f]+$/iu)),
        (s.StrictHexStruct = (0, e.pattern)(
          (0, e.string)(),
          /^0x[0-9a-f]+$/iu
        )),
        (s.isHexString = u),
        (s.isStrictHexString = f),
        (s.assertIsHexString = function h(l) {
          (0, m.assert)(u(l), "Value must be a hexadecimal string.");
        }),
        (s.assertIsStrictHexString = function t(l) {
          (0, m.assert)(
            f(l),
            'Value must be a hexadecimal string, starting with "0x".'
          );
        }),
        (s.add0x = function i(l) {
          return l.startsWith("0x")
            ? l
            : l.startsWith("0X")
            ? `0x${l.substring(2)}`
            : `0x${l}`;
        }),
        (s.remove0x = function o(l) {
          return l.startsWith("0x") || l.startsWith("0X") ? l.substring(2) : l;
        });
    },
    7184: function (I, s, d) {
      "use strict";
      var e =
          (this && this.__createBinding) ||
          (Object.create
            ? function (u, f, h, t) {
                void 0 === t && (t = h);
                var i = Object.getOwnPropertyDescriptor(f, h);
                (!i ||
                  ("get" in i
                    ? !f.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return f[h];
                    },
                  }),
                  Object.defineProperty(u, t, i);
              }
            : function (u, f, h, t) {
                void 0 === t && (t = h), (u[t] = f[h]);
              }),
        m =
          (this && this.__exportStar) ||
          function (u, f) {
            for (var h in u)
              "default" !== h &&
                !Object.prototype.hasOwnProperty.call(f, h) &&
                e(f, u, h);
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        m(d(3689), s),
        m(d(3845), s),
        m(d(6468), s),
        m(d(7634), s),
        m(d(8081), s),
        m(d(6722), s),
        m(d(3243), s),
        m(d(1506), s),
        m(d(6261), s),
        m(d(352), s),
        m(d(7464), s),
        m(d(3571), s),
        m(d(6885), s),
        m(d(5127), s),
        m(d(9246), s),
        m(d(1655), s),
        m(d(9383), s);
    },
    6261: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.getJsonRpcIdValidator =
          s.assertIsJsonRpcError =
          s.isJsonRpcError =
          s.assertIsJsonRpcFailure =
          s.isJsonRpcFailure =
          s.assertIsJsonRpcSuccess =
          s.isJsonRpcSuccess =
          s.assertIsJsonRpcResponse =
          s.isJsonRpcResponse =
          s.assertIsPendingJsonRpcResponse =
          s.isPendingJsonRpcResponse =
          s.JsonRpcResponseStruct =
          s.JsonRpcFailureStruct =
          s.JsonRpcSuccessStruct =
          s.PendingJsonRpcResponseStruct =
          s.assertIsJsonRpcRequest =
          s.isJsonRpcRequest =
          s.assertIsJsonRpcNotification =
          s.isJsonRpcNotification =
          s.JsonRpcNotificationStruct =
          s.JsonRpcRequestStruct =
          s.JsonRpcParamsStruct =
          s.JsonRpcErrorStruct =
          s.JsonRpcIdStruct =
          s.JsonRpcVersionStruct =
          s.jsonrpc2 =
          s.getJsonSize =
          s.isValidJson =
          s.JsonStruct =
          s.UnsafeJsonStruct =
            void 0);
      const e = d(3921),
        m = d(3689);
      (s.UnsafeJsonStruct = (0, e.union)([
        (0, e.literal)(null),
        (0, e.boolean)(),
        (0, e.define)(
          "finite number",
          (w) => (0, e.is)(w, (0, e.number)()) && Number.isFinite(w)
        ),
        (0, e.string)(),
        (0, e.array)((0, e.lazy)(() => s.UnsafeJsonStruct)),
        (0, e.record)(
          (0, e.string)(),
          (0, e.lazy)(() => s.UnsafeJsonStruct)
        ),
      ])),
        (s.JsonStruct = (0, e.define)("Json", (w, S) => {
          function T(k, x) {
            const G = [...x.validator(k, S)];
            return !(G.length > 0) || G;
          }
          try {
            const k = T(w, s.UnsafeJsonStruct);
            return !0 !== k
              ? k
              : T(JSON.parse(JSON.stringify(w)), s.UnsafeJsonStruct);
          } catch (k) {
            return k instanceof RangeError && "Circular reference detected";
          }
        })),
        (s.isValidJson = function f(w) {
          return (0, e.is)(w, s.JsonStruct);
        }),
        (s.getJsonSize = function h(w) {
          (0, m.assertStruct)(w, s.JsonStruct, "Invalid JSON value");
          const S = JSON.stringify(w);
          return new TextEncoder().encode(S).byteLength;
        }),
        (s.jsonrpc2 = "2.0"),
        (s.JsonRpcVersionStruct = (0, e.literal)(s.jsonrpc2)),
        (s.JsonRpcIdStruct = (0, e.nullable)(
          (0, e.union)([(0, e.number)(), (0, e.string)()])
        )),
        (s.JsonRpcErrorStruct = (0, e.object)({
          code: (0, e.integer)(),
          message: (0, e.string)(),
          data: (0, e.optional)(s.JsonStruct),
          stack: (0, e.optional)((0, e.string)()),
        })),
        (s.JsonRpcParamsStruct = (0, e.optional)(
          (0, e.union)([
            (0, e.record)((0, e.string)(), s.JsonStruct),
            (0, e.array)(s.JsonStruct),
          ])
        )),
        (s.JsonRpcRequestStruct = (0, e.object)({
          id: s.JsonRpcIdStruct,
          jsonrpc: s.JsonRpcVersionStruct,
          method: (0, e.string)(),
          params: s.JsonRpcParamsStruct,
        })),
        (s.JsonRpcNotificationStruct = (0, e.omit)(s.JsonRpcRequestStruct, [
          "id",
        ])),
        (s.isJsonRpcNotification = function t(w) {
          return (0, e.is)(w, s.JsonRpcNotificationStruct);
        }),
        (s.assertIsJsonRpcNotification = function i(w, S) {
          (0, m.assertStruct)(
            w,
            s.JsonRpcNotificationStruct,
            "Invalid JSON-RPC notification",
            S
          );
        }),
        (s.isJsonRpcRequest = function o(w) {
          return (0, e.is)(w, s.JsonRpcRequestStruct);
        }),
        (s.assertIsJsonRpcRequest = function l(w, S) {
          (0, m.assertStruct)(
            w,
            s.JsonRpcRequestStruct,
            "Invalid JSON-RPC request",
            S
          );
        }),
        (s.PendingJsonRpcResponseStruct = (0, e.object)({
          id: s.JsonRpcIdStruct,
          jsonrpc: s.JsonRpcVersionStruct,
          result: (0, e.optional)((0, e.unknown)()),
          error: (0, e.optional)(s.JsonRpcErrorStruct),
        })),
        (s.JsonRpcSuccessStruct = (0, e.object)({
          id: s.JsonRpcIdStruct,
          jsonrpc: s.JsonRpcVersionStruct,
          result: s.JsonStruct,
        })),
        (s.JsonRpcFailureStruct = (0, e.object)({
          id: s.JsonRpcIdStruct,
          jsonrpc: s.JsonRpcVersionStruct,
          error: s.JsonRpcErrorStruct,
        })),
        (s.JsonRpcResponseStruct = (0, e.union)([
          s.JsonRpcSuccessStruct,
          s.JsonRpcFailureStruct,
        ])),
        (s.isPendingJsonRpcResponse = function c(w) {
          return (0, e.is)(w, s.PendingJsonRpcResponseStruct);
        }),
        (s.assertIsPendingJsonRpcResponse = function p(w, S) {
          (0, m.assertStruct)(
            w,
            s.PendingJsonRpcResponseStruct,
            "Invalid pending JSON-RPC response",
            S
          );
        }),
        (s.isJsonRpcResponse = function r(w) {
          return (0, e.is)(w, s.JsonRpcResponseStruct);
        }),
        (s.assertIsJsonRpcResponse = function n(w, S) {
          (0, m.assertStruct)(
            w,
            s.JsonRpcResponseStruct,
            "Invalid JSON-RPC response",
            S
          );
        }),
        (s.isJsonRpcSuccess = function a(w) {
          return (0, e.is)(w, s.JsonRpcSuccessStruct);
        }),
        (s.assertIsJsonRpcSuccess = function g(w, S) {
          (0, m.assertStruct)(
            w,
            s.JsonRpcSuccessStruct,
            "Invalid JSON-RPC success response",
            S
          );
        }),
        (s.isJsonRpcFailure = function y(w) {
          return (0, e.is)(w, s.JsonRpcFailureStruct);
        }),
        (s.assertIsJsonRpcFailure = function _(w, S) {
          (0, m.assertStruct)(
            w,
            s.JsonRpcFailureStruct,
            "Invalid JSON-RPC failure response",
            S
          );
        }),
        (s.isJsonRpcError = function v(w) {
          return (0, e.is)(w, s.JsonRpcErrorStruct);
        }),
        (s.assertIsJsonRpcError = function b(w, S) {
          (0, m.assertStruct)(
            w,
            s.JsonRpcErrorStruct,
            "Invalid JSON-RPC error",
            S
          );
        }),
        (s.getJsonRpcIdValidator = function E(w) {
          const {
            permitEmptyString: S,
            permitFractions: T,
            permitNull: k,
          } = Object.assign(
            { permitEmptyString: !0, permitFractions: !1, permitNull: !0 },
            w
          );
          return ($) =>
            !!(
              ("number" == typeof $ && (T || Number.isInteger($))) ||
              ("string" == typeof $ && (S || $.length > 0)) ||
              (k && null === $)
            );
        });
    },
    352: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
    },
    7464: function (I, s, d) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.createModuleLogger = s.createProjectLogger = void 0);
      const u = (0, e(d(563)).default)("metamask");
      (s.createProjectLogger = function f(t) {
        return u.extend(t);
      }),
        (s.createModuleLogger = function h(t, i) {
          return t.extend(i);
        });
    },
    3571: (I, s) => {
      "use strict";
      var l;
      function t(l) {
        return l.charCodeAt(0) <= 127;
      }
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.calculateNumberSize =
          s.calculateStringSize =
          s.isASCII =
          s.isPlainObject =
          s.ESCAPE_CHARACTERS_REGEXP =
          s.JsonSize =
          s.hasProperty =
          s.isObject =
          s.isNullOrUndefined =
          s.isNonEmptyArray =
            void 0),
        (s.isNonEmptyArray = function d(l) {
          return Array.isArray(l) && l.length > 0;
        }),
        (s.isNullOrUndefined = function e(l) {
          return null == l;
        }),
        (s.isObject = function m(l) {
          return !!l && "object" == typeof l && !Array.isArray(l);
        }),
        (s.hasProperty = (l, c) => Object.hasOwnProperty.call(l, c)),
        ((l = s.JsonSize || (s.JsonSize = {}))[(l.Null = 4)] = "Null"),
        (l[(l.Comma = 1)] = "Comma"),
        (l[(l.Wrapper = 1)] = "Wrapper"),
        (l[(l.True = 4)] = "True"),
        (l[(l.False = 5)] = "False"),
        (l[(l.Quote = 1)] = "Quote"),
        (l[(l.Colon = 1)] = "Colon"),
        (l[(l.Date = 24)] = "Date"),
        (s.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu),
        (s.isPlainObject = function h(l) {
          if ("object" != typeof l || null === l) return !1;
          try {
            let c = l;
            for (; null !== Object.getPrototypeOf(c); )
              c = Object.getPrototypeOf(c);
            return Object.getPrototypeOf(l) === c;
          } catch {
            return !1;
          }
        }),
        (s.isASCII = t),
        (s.calculateStringSize = function i(l) {
          var c;
          return (
            l.split("").reduce((r, n) => (t(n) ? r + 1 : r + 2), 0) +
            (null !== (c = l.match(s.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== c
              ? c
              : []
            ).length
          );
        }),
        (s.calculateNumberSize = function o(l) {
          return l.toString().length;
        });
    },
    6885: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.hexToBigInt =
          s.hexToNumber =
          s.bigIntToHex =
          s.numberToHex =
            void 0);
      const e = d(3689),
        m = d(1506);
      (s.numberToHex = (i) => (
        (0, e.assert)("number" == typeof i, "Value must be a number."),
        (0, e.assert)(i >= 0, "Value must be a non-negative number."),
        (0, e.assert)(
          Number.isSafeInteger(i),
          "Value is not a safe integer. Use `bigIntToHex` instead."
        ),
        (0, m.add0x)(i.toString(16))
      )),
        (s.bigIntToHex = (i) => (
          (0, e.assert)("bigint" == typeof i, "Value must be a bigint."),
          (0, e.assert)(i >= 0, "Value must be a non-negative bigint."),
          (0, m.add0x)(i.toString(16))
        )),
        (s.hexToNumber = (i) => {
          (0, m.assertIsHexString)(i);
          const o = parseInt(i, 16);
          return (
            (0, e.assert)(
              Number.isSafeInteger(o),
              "Value is not a safe integer. Use `hexToBigInt` instead."
            ),
            o
          );
        }),
        (s.hexToBigInt = (i) => (
          (0, m.assertIsHexString)(i), BigInt((0, m.add0x)(i))
        ));
    },
    5127: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
    },
    9246: (I, s) => {
      "use strict";
      var h;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.timeSince = s.inMilliseconds = s.Duration = void 0),
        ((h = s.Duration || (s.Duration = {}))[(h.Millisecond = 1)] =
          "Millisecond"),
        (h[(h.Second = 1e3)] = "Second"),
        (h[(h.Minute = 6e4)] = "Minute"),
        (h[(h.Hour = 36e5)] = "Hour"),
        (h[(h.Day = 864e5)] = "Day"),
        (h[(h.Week = 6048e5)] = "Week"),
        (h[(h.Year = 31536e6)] = "Year");
      const m = (h, t) => {
        if (!((h) => Number.isInteger(h) && h >= 0)(h))
          throw new Error(
            `"${t}" must be a non-negative integer. Received: "${h}".`
          );
      };
      (s.inMilliseconds = function u(h, t) {
        return m(h, "count"), h * t;
      }),
        (s.timeSince = function f(h) {
          return m(h, "timestamp"), Date.now() - h;
        });
    },
    1655: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
    },
    9383: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.satisfiesVersionRange =
          s.gtRange =
          s.gtVersion =
          s.assertIsSemVerRange =
          s.assertIsSemVerVersion =
          s.isValidSemVerRange =
          s.isValidSemVerVersion =
          s.VersionRangeStruct =
          s.VersionStruct =
            void 0);
      const e = d(424),
        m = d(3921),
        u = d(3689);
      (s.VersionStruct = (0, m.refine)(
        (0, m.string)(),
        "Version",
        (p) => null !== (0, e.valid)(p) || `Expected SemVer version, got "${p}"`
      )),
        (s.VersionRangeStruct = (0, m.refine)(
          (0, m.string)(),
          "Version range",
          (p) =>
            null !== (0, e.validRange)(p) || `Expected SemVer range, got "${p}"`
        )),
        (s.isValidSemVerVersion = function f(p) {
          return (0, m.is)(p, s.VersionStruct);
        }),
        (s.isValidSemVerRange = function h(p) {
          return (0, m.is)(p, s.VersionRangeStruct);
        }),
        (s.assertIsSemVerVersion = function t(p) {
          (0, u.assertStruct)(p, s.VersionStruct);
        }),
        (s.assertIsSemVerRange = function i(p) {
          (0, u.assertStruct)(p, s.VersionRangeStruct);
        }),
        (s.gtVersion = function o(p, r) {
          return (0, e.gt)(p, r);
        }),
        (s.gtRange = function l(p, r) {
          return (0, e.gtr)(p, r);
        }),
        (s.satisfiesVersionRange = function c(p, r) {
          return (0, e.satisfies)(p, r, { includePrerelease: !0 });
        });
    },
    4248: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
      var e = d(7582),
        m = d(8883),
        u = (function () {
          function f() {
            this._semaphore = new m.default(1);
          }
          return (
            (f.prototype.acquire = function () {
              return e.__awaiter(this, void 0, void 0, function () {
                return e.__generator(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this._semaphore.acquire()];
                    case 1:
                      return [2, i.sent()[1]];
                  }
                });
              });
            }),
            (f.prototype.runExclusive = function (h) {
              return this._semaphore.runExclusive(function () {
                return h();
              });
            }),
            (f.prototype.isLocked = function () {
              return this._semaphore.isLocked();
            }),
            (f.prototype.release = function () {
              this._semaphore.release();
            }),
            f
          );
        })();
      s.default = u;
    },
    8883: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
      var e = d(7582),
        m = (function () {
          function u(f) {
            if (((this._maxConcurrency = f), (this._queue = []), f <= 0))
              throw new Error(
                "semaphore must be initialized to a positive value"
              );
            this._value = f;
          }
          return (
            (u.prototype.acquire = function () {
              var f = this,
                h = this.isLocked(),
                t = new Promise(function (i) {
                  return f._queue.push(i);
                });
              return h || this._dispatch(), t;
            }),
            (u.prototype.runExclusive = function (f) {
              return e.__awaiter(this, void 0, void 0, function () {
                var h, t, i;
                return e.__generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, this.acquire()];
                    case 1:
                      (h = o.sent()), (t = h[0]), (i = h[1]), (o.label = 2);
                    case 2:
                      return o.trys.push([2, , 4, 5]), [4, f(t)];
                    case 3:
                      return [2, o.sent()];
                    case 4:
                      return i(), [7];
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (u.prototype.isLocked = function () {
              return this._value <= 0;
            }),
            (u.prototype.release = function () {
              if (this._maxConcurrency > 1)
                throw new Error(
                  "this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"
                );
              if (this._currentReleaser) {
                var f = this._currentReleaser;
                (this._currentReleaser = void 0), f();
              }
            }),
            (u.prototype._dispatch = function () {
              var f = this,
                h = this._queue.shift();
              if (h) {
                var t = !1;
                (this._currentReleaser = function () {
                  t || ((t = !0), f._value++, f._dispatch());
                }),
                  h([this._value--, this._currentReleaser]);
              }
            }),
            u
          );
        })();
      s.default = m;
    },
    3290: (I, s, d) => {
      "use strict";
      s.WU = void 0;
      var m = d(4248);
      Object.defineProperty(s, "WU", {
        enumerable: !0,
        get: function () {
          return m.default;
        },
      });
      d(8883), d(2292);
    },
    2292: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.withTimeout = void 0);
      var e = d(7582);
      s.withTimeout = function m(u, f, h) {
        var t = this;
        return (
          void 0 === h && (h = new Error("timeout")),
          {
            acquire: function () {
              return new Promise(function (i, o) {
                return e.__awaiter(t, void 0, void 0, function () {
                  var l, c;
                  return e.__generator(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (l = !1),
                          setTimeout(function () {
                            (l = !0), o(h);
                          }, f),
                          [4, u.acquire()]
                        );
                      case 1:
                        return (
                          (c = r.sent()),
                          l ? (Array.isArray(c) ? c[1] : c)() : i(c),
                          [2]
                        );
                    }
                  });
                });
              });
            },
            runExclusive: function (i) {
              return e.__awaiter(this, void 0, void 0, function () {
                var o, l;
                return e.__generator(this, function (c) {
                  switch (c.label) {
                    case 0:
                      (o = function () {}), (c.label = 1);
                    case 1:
                      return c.trys.push([1, , 7, 8]), [4, this.acquire()];
                    case 2:
                      return (
                        (l = c.sent()),
                        Array.isArray(l) ? ((o = l[1]), [4, i(l[0])]) : [3, 4]
                      );
                    case 3:
                      return [2, c.sent()];
                    case 4:
                      return (o = l), [4, i()];
                    case 5:
                      return [2, c.sent()];
                    case 6:
                      return [3, 8];
                    case 7:
                      return o(), [7];
                    case 8:
                      return [2];
                  }
                });
              });
            },
            release: function () {
              u.release();
            },
            isLocked: function () {
              return u.isLocked();
            },
          }
        );
      };
    },
    6915: (I, s, d) => {
      "use strict";
      function e(f) {
        var h,
          t,
          i = "";
        if ("string" == typeof f || "number" == typeof f) i += f;
        else if ("object" == typeof f)
          if (Array.isArray(f))
            for (h = 0; h < f.length; h++)
              f[h] && (t = e(f[h])) && (i && (i += " "), (i += t));
          else for (h in f) f[h] && (i && (i += " "), (i += h));
        return i;
      }
      function m() {
        for (var f, h, t = 0, i = ""; t < arguments.length; )
          (f = arguments[t++]) && (h = e(f)) && (i && (i += " "), (i += h));
        return i;
      }
      d.r(s), d.d(s, { clsx: () => m, default: () => u });
      const u = m;
    },
    563: (I, s, d) => {
      (s.formatArgs = function m(i) {
        if (
          ((i[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            i[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            I.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        const o = "color: " + this.color;
        i.splice(1, 0, o, "color: inherit");
        let l = 0,
          c = 0;
        i[0].replace(/%[a-zA-Z%]/g, (p) => {
          "%%" !== p && (l++, "%c" === p && (c = l));
        }),
          i.splice(c, 0, o);
      }),
        (s.save = function u(i) {
          try {
            i ? s.storage.setItem("debug", i) : s.storage.removeItem("debug");
          } catch {}
        }),
        (s.load = function f() {
          let i;
          try {
            i = s.storage.getItem("debug");
          } catch {}
          return (
            !i &&
              typeof process < "u" &&
              "env" in process &&
              (i = process.env.DEBUG),
            i
          );
        }),
        (s.useColors = function e() {
          return (
            !(
              !(typeof window < "u" && window.process) ||
              ("renderer" !== window.process.type && !window.process.__nwjs)
            ) ||
            (!(
              typeof navigator < "u" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            ) &&
              ((typeof document < "u" &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                (typeof window < "u" &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                (typeof navigator < "u" &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                (typeof navigator < "u" &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }),
        (s.storage = (function h() {
          try {
            return localStorage;
          } catch {}
        })()),
        (s.destroy = (() => {
          let i = !1;
          return () => {
            i ||
              ((i = !0),
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              ));
          };
        })()),
        (s.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (s.log = console.debug || console.log || (() => {})),
        (I.exports = d(6018)(s));
      const { formatters: t } = I.exports;
      t.j = function (i) {
        try {
          return JSON.stringify(i);
        } catch (o) {
          return "[UnexpectedJSONParseError]: " + o.message;
        }
      };
    },
    6018: (I, s, d) => {
      I.exports = function e(m) {
        function f(r) {
          let n,
            g,
            y,
            a = null;
          function _(...v) {
            if (!_.enabled) return;
            const b = _,
              E = Number(new Date());
            (b.diff = E - (n || E)),
              (b.prev = n),
              (b.curr = E),
              (n = E),
              (v[0] = f.coerce(v[0])),
              "string" != typeof v[0] && v.unshift("%O");
            let S = 0;
            (v[0] = v[0].replace(/%([a-zA-Z%])/g, (k, x) => {
              if ("%%" === k) return "%";
              S++;
              const $ = f.formatters[x];
              return (
                "function" == typeof $ &&
                  ((k = $.call(b, v[S])), v.splice(S, 1), S--),
                k
              );
            })),
              f.formatArgs.call(b, v),
              (b.log || f.log).apply(b, v);
          }
          return (
            (_.namespace = r),
            (_.useColors = f.useColors()),
            (_.color = f.selectColor(r)),
            (_.extend = h),
            (_.destroy = f.destroy),
            Object.defineProperty(_, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== a
                  ? a
                  : (g !== f.namespaces &&
                      ((g = f.namespaces), (y = f.enabled(r))),
                    y),
              set: (v) => {
                a = v;
              },
            }),
            "function" == typeof f.init && f.init(_),
            _
          );
        }
        function h(r, n) {
          const a = f(this.namespace + (typeof n > "u" ? ":" : n) + r);
          return (a.log = this.log), a;
        }
        function l(r) {
          return r
            .toString()
            .substring(2, r.toString().length - 2)
            .replace(/\.\*\?$/, "*");
        }
        return (
          (f.debug = f),
          (f.default = f),
          (f.coerce = function c(r) {
            return r instanceof Error ? r.stack || r.message : r;
          }),
          (f.disable = function i() {
            const r = [
              ...f.names.map(l),
              ...f.skips.map(l).map((n) => "-" + n),
            ].join(",");
            return f.enable(""), r;
          }),
          (f.enable = function t(r) {
            let n;
            f.save(r), (f.namespaces = r), (f.names = []), (f.skips = []);
            const a = ("string" == typeof r ? r : "").split(/[\s,]+/),
              g = a.length;
            for (n = 0; n < g; n++)
              a[n] &&
                ("-" === (r = a[n].replace(/\*/g, ".*?"))[0]
                  ? f.skips.push(new RegExp("^" + r.slice(1) + "$"))
                  : f.names.push(new RegExp("^" + r + "$")));
          }),
          (f.enabled = function o(r) {
            if ("*" === r[r.length - 1]) return !0;
            let n, a;
            for (n = 0, a = f.skips.length; n < a; n++)
              if (f.skips[n].test(r)) return !1;
            for (n = 0, a = f.names.length; n < a; n++)
              if (f.names[n].test(r)) return !0;
            return !1;
          }),
          (f.humanize = d(7253)),
          (f.destroy = function p() {
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
            );
          }),
          Object.keys(m).forEach((r) => {
            f[r] = m[r];
          }),
          (f.names = []),
          (f.skips = []),
          (f.formatters = {}),
          (f.selectColor = function u(r) {
            let n = 0;
            for (let a = 0; a < r.length; a++)
              (n = (n << 5) - n + r.charCodeAt(a)), (n |= 0);
            return f.colors[Math.abs(n) % f.colors.length];
          }),
          f.enable(f.load()),
          f
        );
      };
    },
    7167: function (I, s, d) {
      "use strict";
      var e = d(7156).default,
        m =
          (this && this.__importDefault) ||
          function (l) {
            return l && l.__esModule ? l : { default: l };
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.BaseBlockTracker = void 0);
      const u = m(d(2753)),
        h = (l, c) => l + c,
        t = ["sync", "latest"];
      function o(l) {
        return Number.parseInt(l, 16);
      }
      s.BaseBlockTracker = class i extends u.default {
        constructor(c) {
          super(),
            (this._blockResetDuration = c.blockResetDuration || 2e4),
            (this._usePastBlocks = c.usePastBlocks || !1),
            (this._currentBlock = null),
            (this._isRunning = !1),
            (this._onNewListener = this._onNewListener.bind(this)),
            (this._onRemoveListener = this._onRemoveListener.bind(this)),
            (this._resetCurrentBlock = this._resetCurrentBlock.bind(this)),
            this._setupInternalEvents();
        }
        destroy() {
          var c = () => super.removeAllListeners,
            p = this;
          return e(function* () {
            p._cancelBlockResetTimeout(), yield p._maybeEnd(), c().call(p);
          })();
        }
        isRunning() {
          return this._isRunning;
        }
        getCurrentBlock() {
          return this._currentBlock;
        }
        getLatestBlock() {
          var c = this;
          return e(function* () {
            return c._currentBlock
              ? c._currentBlock
              : yield new Promise((r) => c.once("latest", r));
          })();
        }
        removeAllListeners(c) {
          return (
            c ? super.removeAllListeners(c) : super.removeAllListeners(),
            this._setupInternalEvents(),
            this._onRemoveListener(),
            this
          );
        }
        _setupInternalEvents() {
          this.removeListener("newListener", this._onNewListener),
            this.removeListener("removeListener", this._onRemoveListener),
            this.on("newListener", this._onNewListener),
            this.on("removeListener", this._onRemoveListener);
        }
        _onNewListener(c) {
          t.includes(c) && this._maybeStart();
        }
        _onRemoveListener() {
          this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
        }
        _maybeStart() {
          var c = this;
          return e(function* () {
            c._isRunning ||
              ((c._isRunning = !0),
              c._cancelBlockResetTimeout(),
              yield c._start(),
              c.emit("_started"));
          })();
        }
        _maybeEnd() {
          var c = this;
          return e(function* () {
            c._isRunning &&
              ((c._isRunning = !1),
              c._setupBlockResetTimeout(),
              yield c._end(),
              c.emit("_ended"));
          })();
        }
        _getBlockTrackerEventCount() {
          return t.map((c) => this.listenerCount(c)).reduce(h);
        }
        _shouldUseNewBlock(c) {
          const p = this._currentBlock;
          if (!p) return !0;
          const r = o(c),
            n = o(p);
          return (this._usePastBlocks && r < n) || r > n;
        }
        _newPotentialLatest(c) {
          this._shouldUseNewBlock(c) && this._setCurrentBlock(c);
        }
        _setCurrentBlock(c) {
          const p = this._currentBlock;
          (this._currentBlock = c),
            this.emit("latest", c),
            this.emit("sync", { oldBlock: p, newBlock: c });
        }
        _setupBlockResetTimeout() {
          this._cancelBlockResetTimeout(),
            (this._blockResetTimeout = setTimeout(
              this._resetCurrentBlock,
              this._blockResetDuration
            )),
            this._blockResetTimeout.unref && this._blockResetTimeout.unref();
        }
        _cancelBlockResetTimeout() {
          this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
        }
        _resetCurrentBlock() {
          this._currentBlock = null;
        }
      };
    },
    6270: function (I, s, d) {
      "use strict";
      var e = d(7156).default,
        m =
          (this && this.__importDefault) ||
          function (r) {
            return r && r.__esModule ? r : { default: r };
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.PollingBlockTracker = void 0);
      const u = m(d(519)),
        f = m(d(4107)),
        h = d(7167),
        t = d(7157),
        i = (0, t.createModuleLogger)(t.projectLogger, "polling-block-tracker"),
        o = (0, u.default)();
      function p(r, n) {
        return new Promise((a) => {
          const g = setTimeout(a, r);
          g.unref && n && g.unref();
        });
      }
      s.PollingBlockTracker = class c extends h.BaseBlockTracker {
        constructor(n = {}) {
          var a;
          if (!n.provider)
            throw new Error("PollingBlockTracker - no provider specified.");
          super(
            Object.assign(Object.assign({}, n), {
              blockResetDuration:
                null !== (a = n.blockResetDuration) && void 0 !== a
                  ? a
                  : n.pollingInterval,
            })
          ),
            (this._provider = n.provider),
            (this._pollingInterval = n.pollingInterval || 2e4),
            (this._retryTimeout = n.retryTimeout || this._pollingInterval / 10),
            (this._keepEventLoopActive =
              void 0 === n.keepEventLoopActive || n.keepEventLoopActive),
            (this._setSkipCacheFlag = n.setSkipCacheFlag || !1);
        }
        checkForLatestBlock() {
          var n = this;
          return e(function* () {
            return yield n._updateLatestBlock(), yield n.getLatestBlock();
          })();
        }
        _start() {
          var n = this;
          return e(function* () {
            n._synchronize();
          })();
        }
        _end() {
          return e(function* () {})();
        }
        _synchronize() {
          var n = this;
          return e(function* () {
            for (var a; n._isRunning; )
              try {
                yield n._updateLatestBlock();
                const g = p(n._pollingInterval, !n._keepEventLoopActive);
                n.emit("_waitingForNextIteration"), yield g;
              } catch (g) {
                const y = new Error(
                  `PollingBlockTracker - encountered an error while attempting to update latest block:\n${
                    null !== (a = g.stack) && void 0 !== a ? a : g
                  }`
                );
                try {
                  n.emit("error", y);
                } catch {
                  console.error(y);
                }
                const _ = p(n._retryTimeout, !n._keepEventLoopActive);
                n.emit("_waitingForNextIteration"), yield _;
              }
          })();
        }
        _updateLatestBlock() {
          var n = this;
          return e(function* () {
            const a = yield n._fetchLatestBlock();
            n._newPotentialLatest(a);
          })();
        }
        _fetchLatestBlock() {
          var n = this;
          return e(function* () {
            const a = {
              jsonrpc: "2.0",
              id: o(),
              method: "eth_blockNumber",
              params: [],
            };
            n._setSkipCacheFlag && (a.skipCache = !0), i("Making request", a);
            const g = yield (0, f.default)((y) =>
              n._provider.sendAsync(a, y)
            )();
            if ((i("Got response", g), g.error))
              throw new Error(
                `PollingBlockTracker - encountered error fetching block:\n${g.error.message}`
              );
            return g.result;
          })();
        }
      };
    },
    2271: function (I, s, d) {
      "use strict";
      var e = d(7156).default,
        m =
          (this && this.__importDefault) ||
          function (i) {
            return i && i.__esModule ? i : { default: i };
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.SubscribeBlockTracker = void 0);
      const u = m(d(519)),
        f = d(7167),
        h = (0, u.default)();
      s.SubscribeBlockTracker = class t extends f.BaseBlockTracker {
        constructor(o = {}) {
          if (!o.provider)
            throw new Error("SubscribeBlockTracker - no provider specified.");
          super(o),
            (this._provider = o.provider),
            (this._subscriptionId = null);
        }
        checkForLatestBlock() {
          var o = this;
          return e(function* () {
            return yield o.getLatestBlock();
          })();
        }
        _start() {
          var o = this;
          return e(function* () {
            if (null == o._subscriptionId)
              try {
                const l = yield o._call("eth_blockNumber");
                (o._subscriptionId = yield o._call(
                  "eth_subscribe",
                  "newHeads"
                )),
                  o._provider.on("data", o._handleSubData.bind(o)),
                  o._newPotentialLatest(l);
              } catch (l) {
                o.emit("error", l);
              }
          })();
        }
        _end() {
          var o = this;
          return e(function* () {
            if (null != o._subscriptionId)
              try {
                yield o._call("eth_unsubscribe", o._subscriptionId),
                  (o._subscriptionId = null);
              } catch (l) {
                o.emit("error", l);
              }
          })();
        }
        _call(o, ...l) {
          return new Promise((c, p) => {
            this._provider.sendAsync(
              { id: h(), method: o, params: l, jsonrpc: "2.0" },
              (r, n) => {
                r ? p(r) : c(n.result);
              }
            );
          });
        }
        _handleSubData(o, l) {
          var c;
          "eth_subscription" === l.method &&
            (null === (c = l.params) || void 0 === c
              ? void 0
              : c.subscription) === this._subscriptionId &&
            this._newPotentialLatest(l.params.result.number);
        }
      };
    },
    1496: function (I, s, d) {
      "use strict";
      var e =
          (this && this.__createBinding) ||
          (Object.create
            ? function (u, f, h, t) {
                void 0 === t && (t = h),
                  Object.defineProperty(u, t, {
                    enumerable: !0,
                    get: function () {
                      return f[h];
                    },
                  });
              }
            : function (u, f, h, t) {
                void 0 === t && (t = h), (u[t] = f[h]);
              }),
        m =
          (this && this.__exportStar) ||
          function (u, f) {
            for (var h in u)
              "default" !== h &&
                !Object.prototype.hasOwnProperty.call(f, h) &&
                e(f, u, h);
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        m(d(6270), s),
        m(d(2271), s);
    },
    7157: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.createModuleLogger = s.projectLogger = void 0);
      const e = d(7184);
      Object.defineProperty(s, "createModuleLogger", {
        enumerable: !0,
        get: function () {
          return e.createModuleLogger;
        },
      }),
        (s.projectLogger = (0, e.createProjectLogger)("eth-block-tracker"));
    },
    4224: (I, s, d) => {
      var e = d(7156).default;
      const m = d(40);
      I.exports = class u extends m {
        constructor() {
          super(), (this.allResults = []);
        }
        update() {
          return e(function* () {
            throw new Error(
              "BaseFilterWithHistory - no update method specified"
            );
          })();
        }
        addResults(h) {
          (this.allResults = this.allResults.concat(h)), super.addResults(h);
        }
        addInitialResults(h) {
          (this.allResults = this.allResults.concat(h)),
            super.addInitialResults(h);
        }
        getAllResults() {
          return this.allResults;
        }
      };
    },
    40: (I, s, d) => {
      var e = d(7156).default;
      const m = d(2753).default;
      I.exports = class u extends m {
        constructor() {
          super(), (this.updates = []);
        }
        initialize() {
          return e(function* () {})();
        }
        update() {
          return e(function* () {
            throw new Error("BaseFilter - no update method specified");
          })();
        }
        addResults(h) {
          (this.updates = this.updates.concat(h)),
            h.forEach((t) => this.emit("update", t));
        }
        addInitialResults(h) {}
        getChangesAndClear() {
          const h = this.updates;
          return (this.updates = []), h;
        }
      };
    },
    880: (I, s, d) => {
      var e = d(7156).default;
      const m = d(40),
        u = d(2341),
        { incrementHexInt: f } = d(1086);
      I.exports = class h extends m {
        constructor({ provider: i }) {
          super(), (this.type = "block"), (this.provider = i);
        }
        update({ oldBlock: i, newBlock: o }) {
          var l = this;
          return e(function* () {
            const c = o,
              p = f(i),
              n = (yield u({
                provider: l.provider,
                fromBlock: p,
                toBlock: c,
              })).map((a) => a.hash);
            l.addResults(n);
          })();
        }
      };
    },
    2341: (I, s, d) => {
      var e = d(7156).default;
      function u() {
        return (
          (u = e(function* ({ provider: c, fromBlock: p, toBlock: r }) {
            p || (p = r);
            const n = f(p),
              g = f(r) - n + 1,
              y = Array(g)
                .fill()
                .map((v, b) => n + b)
                .map(t);
            let _ = yield Promise.all(
              y.map((v) =>
                (function o(c, p, r) {
                  return l.apply(this, arguments);
                })(c, "eth_getBlockByNumber", [v, !1])
              )
            );
            return (_ = _.filter((v) => null !== v)), _;
          })),
          u.apply(this, arguments)
        );
      }
      function f(c) {
        return null == c ? c : Number.parseInt(c, 16);
      }
      function t(c) {
        return null == c ? c : "0x" + c.toString(16);
      }
      function i(c, p) {
        return new Promise((r, n) => {
          c.sendAsync(p, (a, g) => {
            a
              ? n(a)
              : g.error
              ? n(g.error)
              : g.result
              ? r(g.result)
              : n(new Error("Result was empty"));
          });
        });
      }
      function l() {
        return (l = e(function* (c, p, r) {
          for (let n = 0; n < 3; n++)
            try {
              return yield i(c, {
                id: 1,
                jsonrpc: "2.0",
                method: p,
                params: r,
              });
            } catch (a) {
              console.error(
                `provider.sendAsync failed: ${a.stack || a.message || a}`
              );
            }
          return null;
        })).apply(this, arguments);
      }
      I.exports = function m(c) {
        return u.apply(this, arguments);
      };
    },
    1086: (I) => {
      function e(l) {
        return l.sort((c, p) =>
          "latest" === c || "earliest" === p
            ? 1
            : "latest" === p || "earliest" === c
            ? -1
            : f(c) - f(p)
        );
      }
      function f(l) {
        return null == l ? l : Number.parseInt(l, 16);
      }
      function t(l) {
        if (null == l) return l;
        let c = l.toString(16);
        return c.length % 2 && (c = "0" + c), "0x" + c;
      }
      function o() {
        return Math.floor(16 * Math.random()).toString(16);
      }
      I.exports = {
        minBlockRef: function s(...l) {
          return e(l)[0];
        },
        maxBlockRef: function d(...l) {
          const c = e(l);
          return c[c.length - 1];
        },
        sortBlockRefs: e,
        bnToHex: function m(l) {
          return "0x" + l.toString(16);
        },
        blockRefIsNumber: function u(l) {
          return l && !["earliest", "latest", "pending"].includes(l);
        },
        hexToInt: f,
        incrementHexInt: function h(l) {
          return null == l ? l : t(f(l) + 1);
        },
        intToHex: t,
        unsafeRandomBytes: function i(l) {
          let c = "0x";
          for (let p = 0; p < l; p++) (c += o()), (c += o());
          return c;
        },
      };
    },
    6255: (I, s, d) => {
      var e = d(7156).default;
      const m = d(3290).WU,
        { createAsyncMiddleware: u, createScaffoldMiddleware: f } = d(9244),
        h = d(4969),
        t = d(880),
        i = d(5785),
        { intToHex: o, hexToInt: l } = d(1086);
      function p(g) {
        return r(
          e(function* (...y) {
            const _ = yield g(...y);
            return o(_.id);
          })
        );
      }
      function r(g) {
        return u(
          (function () {
            var y = e(function* (_, v) {
              const b = yield g.apply(null, _.params);
              v.result = b;
            });
            return function (_, v) {
              return y.apply(this, arguments);
            };
          })()
        );
      }
      function a(g, y) {
        const _ = [];
        for (let v in g) _.push(g[v]);
        return _;
      }
      I.exports = function c({ blockTracker: g, provider: y }) {
        let _ = 0,
          v = {};
        const b = new m(),
          E = (function n({ mutex: g }) {
            return (y) =>
              (function () {
                var _ = e(function* (v, b, E, w) {
                  (yield g.acquire())(), y(v, b, E, w);
                });
                return function (v, b, E, w) {
                  return _.apply(this, arguments);
                };
              })();
          })({ mutex: b }),
          w = f({
            eth_newFilter: E(p(T)),
            eth_newBlockFilter: E(p(x)),
            eth_newPendingTransactionFilter: E(p(G)),
            eth_uninstallFilter: E(r(B)),
            eth_getFilterChanges: E(r(le)),
            eth_getFilterLogs: E(r(Q)),
          }),
          S = (function () {
            var ce = e(function* ({ oldBlock: de, newBlock: j }) {
              if (0 === v.length) return;
              const F = yield b.acquire();
              try {
                yield Promise.all(
                  a(v).map(
                    (function () {
                      var A = e(function* (N) {
                        try {
                          yield N.update({ oldBlock: de, newBlock: j });
                        } catch (D) {
                          console.error(D);
                        }
                      });
                      return function (N) {
                        return A.apply(this, arguments);
                      };
                    })()
                  )
                );
              } catch (A) {
                console.error(A);
              }
              F();
            });
            return function (j) {
              return ce.apply(this, arguments);
            };
          })();
        return (
          (w.newLogFilter = T),
          (w.newBlockFilter = x),
          (w.newPendingTransactionFilter = G),
          (w.uninstallFilter = B),
          (w.getFilterChanges = le),
          (w.getFilterLogs = Q),
          (w.destroy = () => {
            !(function ee() {
              ie.apply(this, arguments);
            })();
          }),
          w
        );
        function T(ce) {
          return k.apply(this, arguments);
        }
        function k() {
          return (k = e(function* (ce) {
            const de = new h({ provider: y, params: ce });
            return yield K(de), de;
          })).apply(this, arguments);
        }
        function x() {
          return $.apply(this, arguments);
        }
        function $() {
          return ($ = e(function* () {
            const ce = new t({ provider: y });
            return yield K(ce), ce;
          })).apply(this, arguments);
        }
        function G() {
          return re.apply(this, arguments);
        }
        function re() {
          return (re = e(function* () {
            const ce = new i({ provider: y });
            return yield K(ce), ce;
          })).apply(this, arguments);
        }
        function le(ce) {
          return Y.apply(this, arguments);
        }
        function Y() {
          return (Y = e(function* (ce) {
            const de = l(ce),
              j = v[de];
            if (!j) throw new Error(`No filter for index "${de}"`);
            return j.getChangesAndClear();
          })).apply(this, arguments);
        }
        function Q(ce) {
          return X.apply(this, arguments);
        }
        function X() {
          return (X = e(function* (ce) {
            const de = l(ce),
              j = v[de];
            if (!j) throw new Error(`No filter for index "${de}"`);
            let F = [];
            return "log" === j.type && (F = j.getAllResults()), F;
          })).apply(this, arguments);
        }
        function B(ce) {
          return z.apply(this, arguments);
        }
        function z() {
          return (
            (z = e(function* (ce) {
              const de = l(ce),
                F = !!v[de];
              return (
                F &&
                  (yield (function W(ce) {
                    return V.apply(this, arguments);
                  })(de)),
                F
              );
            })),
            z.apply(this, arguments)
          );
        }
        function K(ce) {
          return H.apply(this, arguments);
        }
        function H() {
          return (H = e(function* (ce) {
            const de = a(v).length,
              j = yield g.getLatestBlock();
            return (
              yield ce.initialize({ currentBlock: j }),
              _++,
              (v[_] = ce),
              (ce.id = _),
              (ce.idHex = o(_)),
              ue({ prevFilterCount: de, newFilterCount: a(v).length }),
              _
            );
          })).apply(this, arguments);
        }
        function V() {
          return (V = e(function* (ce) {
            const de = a(v).length;
            delete v[ce],
              ue({ prevFilterCount: de, newFilterCount: a(v).length });
          })).apply(this, arguments);
        }
        function ie() {
          return (ie = e(function* () {
            const ce = a(v).length;
            (v = {}), ue({ prevFilterCount: ce, newFilterCount: 0 });
          })).apply(this, arguments);
        }
        function ue({ prevFilterCount: ce, newFilterCount: de }) {
          0 === ce && de > 0
            ? g.on("sync", S)
            : ce > 0 && 0 === de && g.removeListener("sync", S);
        }
      };
    },
    4969: (I, s, d) => {
      var e = d(7156).default;
      const m = d(4431),
        u = d(9998),
        f = d(4224),
        {
          hexToInt: t,
          incrementHexInt: i,
          minBlockRef: o,
          blockRefIsNumber: l,
        } = d(1086);
      I.exports = class c extends f {
        constructor({ provider: r, params: n }) {
          super(),
            (this.type = "log"),
            (this.ethQuery = new m(r)),
            (this.params = Object.assign(
              {
                fromBlock: "latest",
                toBlock: "latest",
                address: void 0,
                topics: [],
              },
              n
            )),
            this.params.address &&
              (Array.isArray(this.params.address) ||
                (this.params.address = [this.params.address]),
              (this.params.address = this.params.address.map((a) =>
                a.toLowerCase()
              )));
        }
        initialize({ currentBlock: r }) {
          var n = this;
          return e(function* () {
            let a = n.params.fromBlock;
            ["latest", "pending"].includes(a) && (a = r),
              "earliest" === a && (a = "0x0"),
              (n.params.fromBlock = a);
            const g = o(n.params.toBlock, r),
              y = Object.assign({}, n.params, { toBlock: g }),
              _ = yield n._fetchLogs(y);
            n.addInitialResults(_);
          })();
        }
        update({ oldBlock: r, newBlock: n }) {
          var a = this;
          return e(function* () {
            const g = n;
            let y;
            y = r ? i(r) : n;
            const _ = Object.assign({}, a.params, { fromBlock: y, toBlock: g }),
              b = (yield a._fetchLogs(_)).filter((E) => a.matchLog(E));
            a.addResults(b);
          })();
        }
        _fetchLogs(r) {
          var n = this;
          return e(function* () {
            return yield u((g) => n.ethQuery.getLogs(r, g))();
          })();
        }
        matchLog(r) {
          if (
            t(this.params.fromBlock) >= t(r.blockNumber) ||
            (l(this.params.toBlock) &&
              t(this.params.toBlock) <= t(r.blockNumber))
          )
            return !1;
          const n = r.address && r.address.toLowerCase();
          return (
            !(this.params.address && n && !this.params.address.includes(n)) &&
            this.params.topics.every((g, y) => {
              let _ = r.topics[y];
              if (!_) return !1;
              _ = _.toLowerCase();
              let v = Array.isArray(g) ? g : [g];
              return (
                !!v.includes(null) ||
                ((v = v.map((w) => w.toLowerCase())), v.includes(_))
              );
            })
          );
        }
      };
    },
    9998: (I) => {
      "use strict";
      const s = (e, m, u, f) =>
          function (...h) {
            return new (0, m.promiseModule)((i, o) => {
              h.push(
                m.multiArgs
                  ? (...c) => {
                      m.errorFirst ? (c[0] ? o(c) : (c.shift(), i(c))) : i(c);
                    }
                  : m.errorFirst
                  ? (c, p) => {
                      c ? o(c) : i(p);
                    }
                  : i
              ),
                Reflect.apply(e, this === u ? f : this, h);
            });
          },
        d = new WeakMap();
      I.exports = (e, m) => {
        m = {
          exclude: [/.+(?:Sync|Stream)$/],
          errorFirst: !0,
          promiseModule: Promise,
          ...m,
        };
        const u = typeof e;
        if (null === e || ("object" !== u && "function" !== u))
          throw new TypeError(
            `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
              null === e ? "null" : u
            }\``
          );
        const h = new WeakMap(),
          t = new Proxy(e, {
            apply(i, o, l) {
              const c = h.get(i);
              if (c) return Reflect.apply(c, o, l);
              const p = m.excludeMain ? i : s(i, m, t, i);
              return h.set(i, p), Reflect.apply(p, o, l);
            },
            get(i, o) {
              const l = i[o];
              if (
                !((i, o) => {
                  let l = d.get(i);
                  if ((l || ((l = {}), d.set(i, l)), o in l)) return l[o];
                  const c = (g) =>
                      "string" == typeof g || "symbol" == typeof o
                        ? o === g
                        : g.test(o),
                    p = Reflect.getOwnPropertyDescriptor(i, o),
                    r = void 0 === p || p.writable || p.configurable,
                    a =
                      (m.include ? m.include.some(c) : !m.exclude.some(c)) && r;
                  return (l[o] = a), a;
                })(i, o) ||
                l === Function.prototype[o]
              )
                return l;
              const c = h.get(l);
              if (c) return c;
              if ("function" == typeof l) {
                const p = s(l, m, t, i);
                return h.set(l, p), p;
              }
              return l;
            },
          });
        return t;
      };
    },
    4035: (I, s, d) => {
      var e = d(7156).default;
      const m = d(2753).default,
        { createAsyncMiddleware: u, createScaffoldMiddleware: f } = d(9244),
        h = d(6255),
        { unsafeRandomBytes: t, incrementHexInt: i } = d(1086),
        o = d(2341);
      function c(p) {
        return null == p
          ? null
          : {
              hash: p.hash,
              parentHash: p.parentHash,
              sha3Uncles: p.sha3Uncles,
              miner: p.miner,
              stateRoot: p.stateRoot,
              transactionsRoot: p.transactionsRoot,
              receiptsRoot: p.receiptsRoot,
              logsBloom: p.logsBloom,
              difficulty: p.difficulty,
              number: p.number,
              gasLimit: p.gasLimit,
              gasUsed: p.gasUsed,
              nonce: p.nonce,
              mixHash: p.mixHash,
              timestamp: p.timestamp,
              extraData: p.extraData,
            };
      }
      I.exports = function l({ blockTracker: p, provider: r }) {
        const n = {},
          a = h({ blockTracker: p, provider: r });
        let g = !1;
        const y = new m(),
          _ = f({
            eth_subscribe: u(function v(k, x) {
              return b.apply(this, arguments);
            }),
            eth_unsubscribe: u(function E(k, x) {
              return w.apply(this, arguments);
            }),
          });
        return (
          (_.destroy = function T() {
            y.removeAllListeners();
            for (const k in n) n[k].destroy(), delete n[k];
            g = !0;
          }),
          { events: y, middleware: _ }
        );
        function b() {
          return (
            (b = e(function* (k, x) {
              if (g)
                throw new Error(
                  "SubscriptionManager - attempting to use after destroying"
                );
              const $ = k.params[0],
                G = t(16);
              let re;
              switch ($) {
                case "newHeads":
                  re = (function le({ subId: Q }) {
                    const X = {
                      type: $,
                      destroy:
                        ((B = e(function* () {
                          p.removeListener("sync", X.update);
                        })),
                        function () {
                          return B.apply(this, arguments);
                        }),
                      update: (function () {
                        var B = e(function* ({ oldBlock: z, newBlock: K }) {
                          const H = K,
                            W = i(z);
                          (yield o({ provider: r, fromBlock: W, toBlock: H }))
                            .map(c)
                            .filter((ie) => null !== ie)
                            .forEach((ie) => {
                              S(Q, ie);
                            });
                        });
                        return function (K) {
                          return B.apply(this, arguments);
                        };
                      })(),
                    };
                    var B;
                    return p.on("sync", X.update), X;
                  })({ subId: G });
                  break;
                case "logs":
                  const Q = k.params[1];
                  re = (function Y({ subId: Q, filter: X }) {
                    return (
                      X.on("update", (z) => S(Q, z)),
                      {
                        type: $,
                        destroy:
                          ((z = e(function* () {
                            return yield a.uninstallFilter(X.idHex);
                          })),
                          function () {
                            return z.apply(this, arguments);
                          }),
                      }
                    );
                    var z;
                  })({ subId: G, filter: yield a.newLogFilter(Q) });
                  break;
                default:
                  throw new Error(
                    `SubscriptionManager - unsupported subscription type "${$}"`
                  );
              }
              return (n[G] = re), void (x.result = G);
            })),
            b.apply(this, arguments)
          );
        }
        function w() {
          return (w = e(function* (k, x) {
            if (g)
              throw new Error(
                "SubscriptionManager - attempting to use after destroying"
              );
            const $ = k.params[0],
              G = n[$];
            G
              ? (delete n[$], yield G.destroy(), (x.result = !0))
              : (x.result = !1);
          })).apply(this, arguments);
        }
        function S(k, x) {
          y.emit("notification", {
            jsonrpc: "2.0",
            method: "eth_subscription",
            params: { subscription: k, result: x },
          });
        }
      };
    },
    5785: (I, s, d) => {
      var e = d(7156).default;
      const m = d(40),
        u = d(2341),
        { incrementHexInt: f } = d(1086);
      I.exports = class h extends m {
        constructor({ provider: i }) {
          super(), (this.type = "tx"), (this.provider = i);
        }
        update({ oldBlock: i }) {
          var o = this;
          return e(function* () {
            const l = i,
              c = f(i),
              p = yield u({ provider: o.provider, fromBlock: c, toBlock: l }),
              r = [];
            for (const n of p) r.push(...n.transactions);
            o.addResults(r);
          })();
        }
      };
    },
    4431: (I, s, d) => {
      const e = d(498),
        m = d(519)();
      function u(i) {
        this.currentProvider = i;
      }
      function f(i) {
        return function () {
          var l = [].slice.call(arguments),
            c = l.pop();
          this.sendAsync({ method: i, params: l }, c);
        };
      }
      function h(i, o) {
        return function () {
          var c = [].slice.call(arguments),
            p = c.pop();
          c.length < i && c.push("latest"),
            this.sendAsync({ method: o, params: c }, p);
        };
      }
      (I.exports = u),
        (u.prototype.getBalance = h(2, "eth_getBalance")),
        (u.prototype.getCode = h(2, "eth_getCode")),
        (u.prototype.getTransactionCount = h(2, "eth_getTransactionCount")),
        (u.prototype.getStorageAt = h(3, "eth_getStorageAt")),
        (u.prototype.call = h(2, "eth_call")),
        (u.prototype.protocolVersion = f("eth_protocolVersion")),
        (u.prototype.syncing = f("eth_syncing")),
        (u.prototype.coinbase = f("eth_coinbase")),
        (u.prototype.mining = f("eth_mining")),
        (u.prototype.hashrate = f("eth_hashrate")),
        (u.prototype.gasPrice = f("eth_gasPrice")),
        (u.prototype.accounts = f("eth_accounts")),
        (u.prototype.blockNumber = f("eth_blockNumber")),
        (u.prototype.getBlockTransactionCountByHash = f(
          "eth_getBlockTransactionCountByHash"
        )),
        (u.prototype.getBlockTransactionCountByNumber = f(
          "eth_getBlockTransactionCountByNumber"
        )),
        (u.prototype.getUncleCountByBlockHash = f(
          "eth_getUncleCountByBlockHash"
        )),
        (u.prototype.getUncleCountByBlockNumber = f(
          "eth_getUncleCountByBlockNumber"
        )),
        (u.prototype.sign = f("eth_sign")),
        (u.prototype.sendTransaction = f("eth_sendTransaction")),
        (u.prototype.sendRawTransaction = f("eth_sendRawTransaction")),
        (u.prototype.estimateGas = f("eth_estimateGas")),
        (u.prototype.getBlockByHash = f("eth_getBlockByHash")),
        (u.prototype.getBlockByNumber = f("eth_getBlockByNumber")),
        (u.prototype.getTransactionByHash = f("eth_getTransactionByHash")),
        (u.prototype.getTransactionByBlockHashAndIndex = f(
          "eth_getTransactionByBlockHashAndIndex"
        )),
        (u.prototype.getTransactionByBlockNumberAndIndex = f(
          "eth_getTransactionByBlockNumberAndIndex"
        )),
        (u.prototype.getTransactionReceipt = f("eth_getTransactionReceipt")),
        (u.prototype.getUncleByBlockHashAndIndex = f(
          "eth_getUncleByBlockHashAndIndex"
        )),
        (u.prototype.getUncleByBlockNumberAndIndex = f(
          "eth_getUncleByBlockNumberAndIndex"
        )),
        (u.prototype.getCompilers = f("eth_getCompilers")),
        (u.prototype.compileLLL = f("eth_compileLLL")),
        (u.prototype.compileSolidity = f("eth_compileSolidity")),
        (u.prototype.compileSerpent = f("eth_compileSerpent")),
        (u.prototype.newFilter = f("eth_newFilter")),
        (u.prototype.newBlockFilter = f("eth_newBlockFilter")),
        (u.prototype.newPendingTransactionFilter = f(
          "eth_newPendingTransactionFilter"
        )),
        (u.prototype.uninstallFilter = f("eth_uninstallFilter")),
        (u.prototype.getFilterChanges = f("eth_getFilterChanges")),
        (u.prototype.getFilterLogs = f("eth_getFilterLogs")),
        (u.prototype.getLogs = f("eth_getLogs")),
        (u.prototype.getWork = f("eth_getWork")),
        (u.prototype.submitWork = f("eth_submitWork")),
        (u.prototype.submitHashrate = f("eth_submitHashrate")),
        (u.prototype.sendAsync = function (i, o) {
          this.currentProvider.sendAsync(
            (function t(i) {
              return e({ id: m(), jsonrpc: "2.0", params: [] }, i);
            })(i),
            function (c, p) {
              if (
                (!c &&
                  p.error &&
                  (c = new Error("EthQuery - RPC Error - " + p.error.message)),
                c)
              )
                return o(c);
              o(null, p.result);
            }
          );
        });
    },
    117: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.EthereumProviderError = s.EthereumRpcError = void 0);
      const e = d(8701);
      class m extends Error {
        constructor(i, o, l) {
          if (!Number.isInteger(i))
            throw new Error('"code" must be an integer.');
          if (!o || "string" != typeof o)
            throw new Error('"message" must be a nonempty string.');
          super(o), (this.code = i), void 0 !== l && (this.data = l);
        }
        serialize() {
          const i = { code: this.code, message: this.message };
          return (
            void 0 !== this.data && (i.data = this.data),
            this.stack && (i.stack = this.stack),
            i
          );
        }
        toString() {
          return e.default(this.serialize(), h, 2);
        }
      }
      function h(t, i) {
        if ("[Circular]" !== i) return i;
      }
      (s.EthereumRpcError = m),
        (s.EthereumProviderError = class u extends m {
          constructor(i, o, l) {
            if (
              !(function f(t) {
                return Number.isInteger(t) && t >= 1e3 && t <= 4999;
              })(i)
            )
              throw new Error(
                '"code" must be an integer such that: 1000 <= code <= 4999'
              );
            super(i, o, l);
          }
        });
    },
    3661: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.errorValues = s.errorCodes = void 0),
        (s.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (s.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    7296: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.ethErrors = void 0);
      const e = d(117),
        m = d(5114),
        u = d(3661);
      function f(i, o) {
        const [l, c] = t(o);
        return new e.EthereumRpcError(i, l || m.getMessageFromCode(i), c);
      }
      function h(i, o) {
        const [l, c] = t(o);
        return new e.EthereumProviderError(i, l || m.getMessageFromCode(i), c);
      }
      function t(i) {
        if (i) {
          if ("string" == typeof i) return [i];
          if ("object" == typeof i && !Array.isArray(i)) {
            const { message: o, data: l } = i;
            if (o && "string" != typeof o)
              throw new Error("Must specify string message.");
            return [o || void 0, l];
          }
        }
        return [];
      }
      s.ethErrors = {
        rpc: {
          parse: (i) => f(u.errorCodes.rpc.parse, i),
          invalidRequest: (i) => f(u.errorCodes.rpc.invalidRequest, i),
          invalidParams: (i) => f(u.errorCodes.rpc.invalidParams, i),
          methodNotFound: (i) => f(u.errorCodes.rpc.methodNotFound, i),
          internal: (i) => f(u.errorCodes.rpc.internal, i),
          server: (i) => {
            if (!i || "object" != typeof i || Array.isArray(i))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            const { code: o } = i;
            if (!Number.isInteger(o) || o > -32005 || o < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return f(o, i);
          },
          invalidInput: (i) => f(u.errorCodes.rpc.invalidInput, i),
          resourceNotFound: (i) => f(u.errorCodes.rpc.resourceNotFound, i),
          resourceUnavailable: (i) =>
            f(u.errorCodes.rpc.resourceUnavailable, i),
          transactionRejected: (i) =>
            f(u.errorCodes.rpc.transactionRejected, i),
          methodNotSupported: (i) => f(u.errorCodes.rpc.methodNotSupported, i),
          limitExceeded: (i) => f(u.errorCodes.rpc.limitExceeded, i),
        },
        provider: {
          userRejectedRequest: (i) =>
            h(u.errorCodes.provider.userRejectedRequest, i),
          unauthorized: (i) => h(u.errorCodes.provider.unauthorized, i),
          unsupportedMethod: (i) =>
            h(u.errorCodes.provider.unsupportedMethod, i),
          disconnected: (i) => h(u.errorCodes.provider.disconnected, i),
          chainDisconnected: (i) =>
            h(u.errorCodes.provider.chainDisconnected, i),
          custom: (i) => {
            if (!i || "object" != typeof i || Array.isArray(i))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            const { code: o, message: l, data: c } = i;
            if (!l || "string" != typeof l)
              throw new Error('"message" must be a nonempty string');
            return new e.EthereumProviderError(o, l, c);
          },
        },
      };
    },
    664: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.getMessageFromCode =
          s.serializeError =
          s.EthereumProviderError =
          s.EthereumRpcError =
          s.ethErrors =
          s.errorCodes =
            void 0);
      const e = d(117);
      Object.defineProperty(s, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return e.EthereumRpcError;
        },
      }),
        Object.defineProperty(s, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return e.EthereumProviderError;
          },
        });
      const m = d(5114);
      Object.defineProperty(s, "serializeError", {
        enumerable: !0,
        get: function () {
          return m.serializeError;
        },
      }),
        Object.defineProperty(s, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return m.getMessageFromCode;
          },
        });
      const u = d(7296);
      Object.defineProperty(s, "ethErrors", {
        enumerable: !0,
        get: function () {
          return u.ethErrors;
        },
      });
      const f = d(3661);
      Object.defineProperty(s, "errorCodes", {
        enumerable: !0,
        get: function () {
          return f.errorCodes;
        },
      });
    },
    5114: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.serializeError =
          s.isValidCode =
          s.getMessageFromCode =
          s.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      const e = d(3661),
        m = d(117),
        u = e.errorCodes.rpc.internal,
        h = { code: u, message: t(u) };
      function t(
        r,
        n = "Unspecified error message. This is a bug, please report it."
      ) {
        if (Number.isInteger(r)) {
          const a = r.toString();
          if (p(e.errorValues, a)) return e.errorValues[a].message;
          if (l(r)) return s.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function i(r) {
        if (!Number.isInteger(r)) return !1;
        const n = r.toString();
        return !(!e.errorValues[n] && !l(r));
      }
      function l(r) {
        return r >= -32099 && r <= -32e3;
      }
      function c(r) {
        return r && "object" == typeof r && !Array.isArray(r)
          ? Object.assign({}, r)
          : r;
      }
      function p(r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
      }
      (s.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (s.getMessageFromCode = t),
        (s.isValidCode = i),
        (s.serializeError = function o(
          r,
          { fallbackError: n = h, shouldIncludeStack: a = !1 } = {}
        ) {
          var g, y;
          if (!n || !Number.isInteger(n.code) || "string" != typeof n.message)
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (r instanceof m.EthereumRpcError) return r.serialize();
          const _ = {};
          if (
            r &&
            "object" == typeof r &&
            !Array.isArray(r) &&
            p(r, "code") &&
            i(r.code)
          ) {
            const b = r;
            (_.code = b.code),
              b.message && "string" == typeof b.message
                ? ((_.message = b.message), p(b, "data") && (_.data = b.data))
                : ((_.message = t(_.code)), (_.data = { originalError: c(r) }));
          } else {
            _.code = n.code;
            const b = null === (g = r) || void 0 === g ? void 0 : g.message;
            (_.message = b && "string" == typeof b ? b : n.message),
              (_.data = { originalError: c(r) });
          }
          const v = null === (y = r) || void 0 === y ? void 0 : y.stack;
          return a && r && v && "string" == typeof v && (_.stack = v), _;
        });
    },
    8701: (I) => {
      (I.exports = f), (f.default = f), (f.stable = o), (f.stableStringify = o);
      var s = "[...]",
        d = "[Circular]",
        e = [],
        m = [];
      function u() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER,
        };
      }
      function f(p, r, n, a) {
        var g;
        typeof a > "u" && (a = u()), t(p, "", 0, [], void 0, 0, a);
        try {
          g =
            0 === m.length
              ? JSON.stringify(p, r, n)
              : JSON.stringify(p, c(r), n);
        } catch {
          return JSON.stringify(
            "[unable to serialize, circular reference is too complex to analyze]"
          );
        } finally {
          for (; 0 !== e.length; ) {
            var y = e.pop();
            4 === y.length
              ? Object.defineProperty(y[0], y[1], y[3])
              : (y[0][y[1]] = y[2]);
          }
        }
        return g;
      }
      function h(p, r, n, a) {
        var g = Object.getOwnPropertyDescriptor(a, n);
        void 0 !== g.get
          ? g.configurable
            ? (Object.defineProperty(a, n, { value: p }), e.push([a, n, r, g]))
            : m.push([r, n, p])
          : ((a[n] = p), e.push([a, n, r]));
      }
      function t(p, r, n, a, g, y, _) {
        var v;
        if (((y += 1), "object" == typeof p && null !== p)) {
          for (v = 0; v < a.length; v++)
            if (a[v] === p) return void h(d, p, r, g);
          if (typeof _.depthLimit < "u" && y > _.depthLimit)
            return void h(s, p, r, g);
          if (typeof _.edgesLimit < "u" && n + 1 > _.edgesLimit)
            return void h(s, p, r, g);
          if ((a.push(p), Array.isArray(p)))
            for (v = 0; v < p.length; v++) t(p[v], v, v, a, p, y, _);
          else {
            var b = Object.keys(p);
            for (v = 0; v < b.length; v++) {
              var E = b[v];
              t(p[E], E, v, a, p, y, _);
            }
          }
          a.pop();
        }
      }
      function i(p, r) {
        return p < r ? -1 : p > r ? 1 : 0;
      }
      function o(p, r, n, a) {
        typeof a > "u" && (a = u());
        var y,
          g = l(p, "", 0, [], void 0, 0, a) || p;
        try {
          y =
            0 === m.length
              ? JSON.stringify(g, r, n)
              : JSON.stringify(g, c(r), n);
        } catch {
          return JSON.stringify(
            "[unable to serialize, circular reference is too complex to analyze]"
          );
        } finally {
          for (; 0 !== e.length; ) {
            var _ = e.pop();
            4 === _.length
              ? Object.defineProperty(_[0], _[1], _[3])
              : (_[0][_[1]] = _[2]);
          }
        }
        return y;
      }
      function l(p, r, n, a, g, y, _) {
        var v;
        if (((y += 1), "object" == typeof p && null !== p)) {
          for (v = 0; v < a.length; v++)
            if (a[v] === p) return void h(d, p, r, g);
          try {
            if ("function" == typeof p.toJSON) return;
          } catch {
            return;
          }
          if (typeof _.depthLimit < "u" && y > _.depthLimit)
            return void h(s, p, r, g);
          if (typeof _.edgesLimit < "u" && n + 1 > _.edgesLimit)
            return void h(s, p, r, g);
          if ((a.push(p), Array.isArray(p)))
            for (v = 0; v < p.length; v++) l(p[v], v, v, a, p, y, _);
          else {
            var b = {},
              E = Object.keys(p).sort(i);
            for (v = 0; v < E.length; v++) {
              var w = E[v];
              l(p[w], w, v, a, p, y, _), (b[w] = p[w]);
            }
            if (!(typeof g < "u")) return b;
            e.push([g, r, p]), (g[r] = b);
          }
          a.pop();
        }
      }
      function c(p) {
        return (
          (p =
            typeof p < "u"
              ? p
              : function (r, n) {
                  return n;
                }),
          function (r, n) {
            if (m.length > 0)
              for (var a = 0; a < m.length; a++) {
                var g = m[a];
                if (g[1] === r && g[0] === n) {
                  (n = g[2]), m.splice(a, 1);
                  break;
                }
              }
            return p.call(this, r, n);
          }
        );
      }
    },
    6698: (I) => {
      I.exports =
        "function" == typeof Object.create
          ? function (d, e) {
              e &&
                ((d.super_ = e),
                (d.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: d,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            }
          : function (d, e) {
              if (e) {
                d.super_ = e;
                var m = function () {};
                (m.prototype = e.prototype),
                  (d.prototype = new m()),
                  (d.prototype.constructor = d);
              }
            };
    },
    5887: function (I, s, d) {
      "use strict";
      var e = d(7156).default,
        m =
          (this && this.__importDefault) ||
          function (i) {
            return i && i.__esModule ? i : { default: i };
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.JsonRpcEngine = void 0);
      const u = m(d(2135)),
        f = d(664);
      class h extends u.default {
        constructor() {
          super(), (this._middleware = []);
        }
        push(o) {
          this._middleware.push(o);
        }
        handle(o, l) {
          if (l && "function" != typeof l)
            throw new Error('"callback" must be a function if provided.');
          return Array.isArray(o)
            ? l
              ? this._handleBatch(o, l)
              : this._handleBatch(o)
            : l
            ? this._handle(o, l)
            : this._promiseHandle(o);
        }
        asMiddleware() {
          var o = this;
          return (function () {
            var l = e(function* (c, p, r, n) {
              try {
                const [a, g, y] = yield h._runAllMiddleware(
                  c,
                  p,
                  o._middleware
                );
                return g
                  ? (yield h._runReturnHandlers(y), n(a))
                  : r(
                      (function () {
                        var _ = e(function* (v) {
                          try {
                            yield h._runReturnHandlers(y);
                          } catch (b) {
                            return v(b);
                          }
                          return v();
                        });
                        return function (v) {
                          return _.apply(this, arguments);
                        };
                      })()
                    );
              } catch (a) {
                return n(a);
              }
            });
            return function (c, p, r, n) {
              return l.apply(this, arguments);
            };
          })();
        }
        _handleBatch(o, l) {
          var c = this;
          return e(function* () {
            try {
              const p = yield Promise.all(o.map(c._promiseHandle.bind(c)));
              return l ? l(null, p) : p;
            } catch (p) {
              if (l) return l(p);
              throw p;
            }
          })();
        }
        _promiseHandle(o) {
          return new Promise((l) => {
            this._handle(o, (c, p) => {
              l(p);
            });
          });
        }
        _handle(o, l) {
          var c = this;
          return e(function* () {
            if (!o || Array.isArray(o) || "object" != typeof o) {
              const a = new f.EthereumRpcError(
                f.errorCodes.rpc.invalidRequest,
                "Requests must be plain objects. Received: " + typeof o,
                { request: o }
              );
              return l(a, { id: void 0, jsonrpc: "2.0", error: a });
            }
            if ("string" != typeof o.method) {
              const a = new f.EthereumRpcError(
                f.errorCodes.rpc.invalidRequest,
                "Must specify a string method. Received: " + typeof o.method,
                { request: o }
              );
              return l(a, { id: o.id, jsonrpc: "2.0", error: a });
            }
            const p = Object.assign({}, o),
              r = { id: p.id, jsonrpc: p.jsonrpc };
            let n = null;
            try {
              yield c._processRequest(p, r);
            } catch (a) {
              n = a;
            }
            return (
              n &&
                (delete r.result, r.error || (r.error = f.serializeError(n))),
              l(n, r)
            );
          })();
        }
        _processRequest(o, l) {
          var c = this;
          return e(function* () {
            const [p, r, n] = yield h._runAllMiddleware(o, l, c._middleware);
            if (
              (h._checkForCompletion(o, l, r), yield h._runReturnHandlers(n), p)
            )
              throw p;
          })();
        }
        static _runAllMiddleware(o, l, c) {
          return e(function* () {
            const p = [];
            let r = null,
              n = !1;
            for (const a of c)
              if ((([r, n] = yield h._runMiddleware(o, l, a, p)), n)) break;
            return [r, n, p.reverse()];
          })();
        }
        static _runMiddleware(o, l, c, p) {
          return new Promise((r) => {
            const n = (g) => {
                const y = g || l.error;
                y && (l.error = f.serializeError(y)), r([y, !0]);
              },
              a = (g) => {
                l.error
                  ? n(l.error)
                  : (g &&
                      ("function" != typeof g &&
                        n(
                          new f.EthereumRpcError(
                            f.errorCodes.rpc.internal,
                            `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof g}" for request:\n${t(
                              o
                            )}`,
                            { request: o }
                          )
                        ),
                      p.push(g)),
                    r([null, !1]));
              };
            try {
              c(o, l, a, n);
            } catch (g) {
              n(g);
            }
          });
        }
        static _runReturnHandlers(o) {
          return e(function* () {
            for (const l of o)
              yield new Promise((c, p) => {
                l((r) => (r ? p(r) : c()));
              });
          })();
        }
        static _checkForCompletion(o, l, c) {
          if (!("result" in l) && !("error" in l))
            throw new f.EthereumRpcError(
              f.errorCodes.rpc.internal,
              `JsonRpcEngine: Response has no error or result for request:\n${t(
                o
              )}`,
              { request: o }
            );
          if (!c)
            throw new f.EthereumRpcError(
              f.errorCodes.rpc.internal,
              `JsonRpcEngine: Nothing ended request:\n${t(o)}`,
              { request: o }
            );
        }
      }
      function t(i) {
        return JSON.stringify(i, null, 2);
      }
      s.JsonRpcEngine = h;
    },
    4527: (I, s, d) => {
      "use strict";
      var e = d(7156).default;
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.createAsyncMiddleware = void 0),
        (s.createAsyncMiddleware = function m(u) {
          return (function () {
            var f = e(function* (h, t, i, o) {
              let l;
              const c = new Promise((a) => {
                l = a;
              });
              let p = null,
                r = !1;
              const n = (function () {
                var a = e(function* () {
                  (r = !0),
                    i((g) => {
                      (p = g), l();
                    }),
                    yield c;
                });
                return function () {
                  return a.apply(this, arguments);
                };
              })();
              try {
                yield u(h, t, n), r ? (yield c, p(null)) : o(null);
              } catch (a) {
                p ? p(a) : o(a);
              }
            });
            return function (h, t, i, o) {
              return f.apply(this, arguments);
            };
          })();
        });
    },
    128: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.createScaffoldMiddleware = void 0),
        (s.createScaffoldMiddleware = function d(e) {
          return (m, u, f, h) => {
            const t = e[m.method];
            return void 0 === t
              ? f()
              : "function" == typeof t
              ? t(m, u, f, h)
              : ((u.result = t), h());
          };
        });
    },
    5802: (I, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.getUniqueId = void 0);
      const d = 4294967295;
      let e = Math.floor(Math.random() * d);
      s.getUniqueId = function m() {
        return (e = (e + 1) % d), e;
      };
    },
    5608: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.createIdRemapMiddleware = void 0);
      const e = d(5802);
      s.createIdRemapMiddleware = function m() {
        return (u, f, h, t) => {
          const i = u.id,
            o = e.getUniqueId();
          (u.id = o),
            (f.id = o),
            h((l) => {
              (u.id = i), (f.id = i), l();
            });
        };
      };
    },
    9244: function (I, s, d) {
      "use strict";
      var e =
          (this && this.__createBinding) ||
          (Object.create
            ? function (u, f, h, t) {
                void 0 === t && (t = h),
                  Object.defineProperty(u, t, {
                    enumerable: !0,
                    get: function () {
                      return f[h];
                    },
                  });
              }
            : function (u, f, h, t) {
                void 0 === t && (t = h), (u[t] = f[h]);
              }),
        m =
          (this && this.__exportStar) ||
          function (u, f) {
            for (var h in u)
              "default" !== h &&
                !Object.prototype.hasOwnProperty.call(f, h) &&
                e(f, u, h);
          };
      Object.defineProperty(s, "__esModule", { value: !0 }),
        m(d(5608), s),
        m(d(4527), s),
        m(d(128), s),
        m(d(5802), s),
        m(d(5887), s),
        m(d(4606), s);
    },
    4606: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.mergeMiddleware = void 0);
      const e = d(5887);
      s.mergeMiddleware = function m(u) {
        const f = new e.JsonRpcEngine();
        return u.forEach((h) => f.push(h)), f.asMiddleware();
      };
    },
    2135: (I, s, d) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
      const e = d(2016);
      function m(h, t, i) {
        try {
          Reflect.apply(h, t, i);
        } catch (o) {
          setTimeout(() => {
            throw o;
          });
        }
      }
      s.default = class f extends e.EventEmitter {
        emit(t, ...i) {
          let o = "error" === t;
          const l = this._events;
          if (void 0 !== l) o = o && void 0 === l.error;
          else if (!o) return !1;
          if (o) {
            let p;
            if ((i.length > 0 && ([p] = i), p instanceof Error)) throw p;
            const r = new Error(
              "Unhandled error." + (p ? ` (${p.message})` : "")
            );
            throw ((r.context = p), r);
          }
          const c = l[t];
          if (void 0 === c) return !1;
          if ("function" == typeof c) m(c, this, i);
          else {
            const p = c.length,
              r = (function u(h) {
                const t = h.length,
                  i = new Array(t);
                for (let o = 0; o < t; o += 1) i[o] = h[o];
                return i;
              })(c);
            for (let n = 0; n < p; n += 1) m(r[n], this, i);
          }
          return !0;
        }
      };
    },
    519: (I) => {
      I.exports = function s(d) {
        var e = (d = d || {}).max || Number.MAX_SAFE_INTEGER,
          m = typeof d.start < "u" ? d.start : Math.floor(Math.random() * e);
        return function () {
          return (m %= e), m++;
        };
      };
    },
    568: (I, s, d) => {
      I.exports = d(8554)(d(6322));
    },
    8554: (I, s, d) => {
      const e = d(773),
        m = d(7256);
      I.exports = function (u) {
        const f = e(u),
          h = m(u);
        return function (t, i) {
          switch ("string" == typeof t ? t.toLowerCase() : t) {
            case "keccak224":
              return new f(1152, 448, null, 224, i);
            case "keccak256":
              return new f(1088, 512, null, 256, i);
            case "keccak384":
              return new f(832, 768, null, 384, i);
            case "keccak512":
              return new f(576, 1024, null, 512, i);
            case "sha3-224":
              return new f(1152, 448, 6, 224, i);
            case "sha3-256":
              return new f(1088, 512, 6, 256, i);
            case "sha3-384":
              return new f(832, 768, 6, 384, i);
            case "sha3-512":
              return new f(576, 1024, 6, 512, i);
            case "shake128":
              return new h(1344, 256, 31, i);
            case "shake256":
              return new h(1088, 512, 31, i);
            default:
              throw new Error("Invald algorithm: " + t);
          }
        };
      };
    },
    773: (I, s, d) => {
      const { Transform: e } = d(6745);
      I.exports = (m) =>
        class lt extends e {
          constructor(f, h, t, i, o) {
            super(o),
              (this._rate = f),
              (this._capacity = h),
              (this._delimitedSuffix = t),
              (this._hashBitLength = i),
              (this._options = o),
              (this._state = new m()),
              this._state.initialize(f, h),
              (this._finalized = !1);
          }
          _transform(f, h, t) {
            let i = null;
            try {
              this.update(f, h);
            } catch (o) {
              i = o;
            }
            t(i);
          }
          _flush(f) {
            let h = null;
            try {
              this.push(this.digest());
            } catch (t) {
              h = t;
            }
            f(h);
          }
          update(f, h) {
            if (!Buffer.isBuffer(f) && "string" != typeof f)
              throw new TypeError("Data must be a string or a buffer");
            if (this._finalized) throw new Error("Digest already called");
            return (
              Buffer.isBuffer(f) || (f = Buffer.from(f, h)),
              this._state.absorb(f),
              this
            );
          }
          digest(f) {
            if (this._finalized) throw new Error("Digest already called");
            (this._finalized = !0),
              this._delimitedSuffix &&
                this._state.absorbLastFewBits(this._delimitedSuffix);
            let h = this._state.squeeze(this._hashBitLength / 8);
            return void 0 !== f && (h = h.toString(f)), this._resetState(), h;
          }
          _resetState() {
            return this._state.initialize(this._rate, this._capacity), this;
          }
          _clone() {
            const f = new lt(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._hashBitLength,
              this._options
            );
            return (
              this._state.copy(f._state), (f._finalized = this._finalized), f
            );
          }
        };
    },
    7256: (I, s, d) => {
      const { Transform: e } = d(6745);
      I.exports = (m) =>
        class ut extends e {
          constructor(f, h, t, i) {
            super(i),
              (this._rate = f),
              (this._capacity = h),
              (this._delimitedSuffix = t),
              (this._options = i),
              (this._state = new m()),
              this._state.initialize(f, h),
              (this._finalized = !1);
          }
          _transform(f, h, t) {
            let i = null;
            try {
              this.update(f, h);
            } catch (o) {
              i = o;
            }
            t(i);
          }
          _flush() {}
          _read(f) {
            this.push(this.squeeze(f));
          }
          update(f, h) {
            if (!Buffer.isBuffer(f) && "string" != typeof f)
              throw new TypeError("Data must be a string or a buffer");
            if (this._finalized) throw new Error("Squeeze already called");
            return (
              Buffer.isBuffer(f) || (f = Buffer.from(f, h)),
              this._state.absorb(f),
              this
            );
          }
          squeeze(f, h) {
            this._finalized ||
              ((this._finalized = !0),
              this._state.absorbLastFewBits(this._delimitedSuffix));
            let t = this._state.squeeze(f);
            return void 0 !== h && (t = t.toString(h)), t;
          }
          _resetState() {
            return this._state.initialize(this._rate, this._capacity), this;
          }
          _clone() {
            const f = new ut(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._options
            );
            return (
              this._state.copy(f._state), (f._finalized = this._finalized), f
            );
          }
        };
    },
    8363: (I, s) => {
      const d = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ];
      s.p1600 = function (e) {
        for (let m = 0; m < 24; ++m) {
          const u = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            f = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            h = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            t = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            i = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            o = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            p = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            r = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
          let n = p ^ ((h << 1) | (t >>> 31)),
            a = r ^ ((t << 1) | (h >>> 31));
          const g = e[0] ^ n,
            y = e[1] ^ a,
            _ = e[10] ^ n,
            v = e[11] ^ a,
            b = e[20] ^ n,
            E = e[21] ^ a,
            w = e[30] ^ n,
            S = e[31] ^ a,
            T = e[40] ^ n,
            k = e[41] ^ a;
          (n = u ^ ((i << 1) | (o >>> 31))), (a = f ^ ((o << 1) | (i >>> 31)));
          const x = e[2] ^ n,
            $ = e[3] ^ a,
            G = e[12] ^ n,
            re = e[13] ^ a,
            le = e[22] ^ n,
            Y = e[23] ^ a,
            Q = e[32] ^ n,
            X = e[33] ^ a,
            B = e[42] ^ n,
            z = e[43] ^ a;
          (n = h ^ ((l << 1) | (c >>> 31))), (a = t ^ ((c << 1) | (l >>> 31)));
          const K = e[4] ^ n,
            H = e[5] ^ a,
            W = e[14] ^ n,
            V = e[15] ^ a,
            ee = e[24] ^ n,
            ie = e[25] ^ a,
            ue = e[34] ^ n,
            ce = e[35] ^ a,
            de = e[44] ^ n,
            j = e[45] ^ a;
          (n = i ^ ((p << 1) | (r >>> 31))), (a = o ^ ((r << 1) | (p >>> 31)));
          const F = e[6] ^ n,
            A = e[7] ^ a,
            N = e[16] ^ n,
            D = e[17] ^ a,
            C = e[26] ^ n,
            R = e[27] ^ a,
            L = e[36] ^ n,
            J = e[37] ^ a,
            se = e[46] ^ n,
            ne = e[47] ^ a;
          (n = l ^ ((u << 1) | (f >>> 31))), (a = c ^ ((f << 1) | (u >>> 31)));
          const te = e[8] ^ n,
            he = e[9] ^ a,
            Z = e[18] ^ n,
            fe = e[19] ^ a,
            oe = e[28] ^ n,
            pe = e[29] ^ a,
            M = e[38] ^ n,
            P = e[39] ^ a,
            O = e[48] ^ n,
            U = e[49] ^ a,
            q = g,
            ae = y,
            ge = (v << 4) | (_ >>> 28),
            _e = (_ << 4) | (v >>> 28),
            me = (b << 3) | (E >>> 29),
            be = (E << 3) | (b >>> 29),
            ye = (S << 9) | (w >>> 23),
            ve = (w << 9) | (S >>> 23),
            we = (T << 18) | (k >>> 14),
            Ee = (k << 18) | (T >>> 14),
            Se = (x << 1) | ($ >>> 31),
            Re = ($ << 1) | (x >>> 31),
            Ce = (re << 12) | (G >>> 20),
            Ie = (G << 12) | (re >>> 20),
            ke = (le << 10) | (Y >>> 22),
            Ae = (Y << 10) | (le >>> 22),
            Te = (X << 13) | (Q >>> 19),
            Ne = (Q << 13) | (X >>> 19),
            Me = (B << 2) | (z >>> 30),
            xe = (z << 2) | (B >>> 30),
            Le = (H << 30) | (K >>> 2),
            Pe = (K << 30) | (H >>> 2),
            Oe = (W << 6) | (V >>> 26),
            Be = (V << 6) | (W >>> 26),
            De = (ie << 11) | (ee >>> 21),
            Fe = (ee << 11) | (ie >>> 21),
            je = (ue << 15) | (ce >>> 17),
            He = (ce << 15) | (ue >>> 17),
            Ue = (j << 29) | (de >>> 3),
            $e = (de << 29) | (j >>> 3),
            We = (F << 28) | (A >>> 4),
            Ve = (A << 28) | (F >>> 4),
            ze = (D << 23) | (N >>> 9),
            Ge = (N << 23) | (D >>> 9),
            Je = (C << 25) | (R >>> 7),
            Ze = (R << 25) | (C >>> 7),
            Ke = (L << 21) | (J >>> 11),
            Qe = (J << 21) | (L >>> 11),
            Ye = (ne << 24) | (se >>> 8),
            Xe = (se << 24) | (ne >>> 8),
            qe = (te << 27) | (he >>> 5),
            et = (he << 27) | (te >>> 5),
            tt = (Z << 20) | (fe >>> 12),
            nt = (fe << 20) | (Z >>> 12),
            rt = (pe << 7) | (oe >>> 25),
            st = (oe << 7) | (pe >>> 25),
            it = (M << 8) | (P >>> 24),
            ot = (P << 8) | (M >>> 24),
            at = (O << 14) | (U >>> 18),
            ct = (U << 14) | (O >>> 18);
          (e[0] = q ^ (~Ce & De)),
            (e[1] = ae ^ (~Ie & Fe)),
            (e[10] = We ^ (~tt & me)),
            (e[11] = Ve ^ (~nt & be)),
            (e[20] = Se ^ (~Oe & Je)),
            (e[21] = Re ^ (~Be & Ze)),
            (e[30] = qe ^ (~ge & ke)),
            (e[31] = et ^ (~_e & Ae)),
            (e[40] = Le ^ (~ze & rt)),
            (e[41] = Pe ^ (~Ge & st)),
            (e[2] = Ce ^ (~De & Ke)),
            (e[3] = Ie ^ (~Fe & Qe)),
            (e[12] = tt ^ (~me & Te)),
            (e[13] = nt ^ (~be & Ne)),
            (e[22] = Oe ^ (~Je & it)),
            (e[23] = Be ^ (~Ze & ot)),
            (e[32] = ge ^ (~ke & je)),
            (e[33] = _e ^ (~Ae & He)),
            (e[42] = ze ^ (~rt & ye)),
            (e[43] = Ge ^ (~st & ve)),
            (e[4] = De ^ (~Ke & at)),
            (e[5] = Fe ^ (~Qe & ct)),
            (e[14] = me ^ (~Te & Ue)),
            (e[15] = be ^ (~Ne & $e)),
            (e[24] = Je ^ (~it & we)),
            (e[25] = Ze ^ (~ot & Ee)),
            (e[34] = ke ^ (~je & Ye)),
            (e[35] = Ae ^ (~He & Xe)),
            (e[44] = rt ^ (~ye & Me)),
            (e[45] = st ^ (~ve & xe)),
            (e[6] = Ke ^ (~at & q)),
            (e[7] = Qe ^ (~ct & ae)),
            (e[16] = Te ^ (~Ue & We)),
            (e[17] = Ne ^ (~$e & Ve)),
            (e[26] = it ^ (~we & Se)),
            (e[27] = ot ^ (~Ee & Re)),
            (e[36] = je ^ (~Ye & qe)),
            (e[37] = He ^ (~Xe & et)),
            (e[46] = ye ^ (~Me & Le)),
            (e[47] = ve ^ (~xe & Pe)),
            (e[8] = at ^ (~q & Ce)),
            (e[9] = ct ^ (~ae & Ie)),
            (e[18] = Ue ^ (~We & tt)),
            (e[19] = $e ^ (~Ve & nt)),
            (e[28] = we ^ (~Se & Oe)),
            (e[29] = Ee ^ (~Re & Be)),
            (e[38] = Ye ^ (~qe & ge)),
            (e[39] = Xe ^ (~et & _e)),
            (e[48] = Me ^ (~Le & ze)),
            (e[49] = xe ^ (~Pe & Ge)),
            (e[0] ^= d[2 * m]),
            (e[1] ^= d[2 * m + 1]);
        }
      };
    },
    6322: (I, s, d) => {
      const e = d(8363);
      function m() {
        (this.state = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ]),
          (this.blockSize = null),
          (this.count = 0),
          (this.squeezing = !1);
      }
      (m.prototype.initialize = function (u, f) {
        for (let h = 0; h < 50; ++h) this.state[h] = 0;
        (this.blockSize = u / 8), (this.count = 0), (this.squeezing = !1);
      }),
        (m.prototype.absorb = function (u) {
          for (let f = 0; f < u.length; ++f)
            (this.state[~~(this.count / 4)] ^= u[f] << ((this.count % 4) * 8)),
              (this.count += 1),
              this.count === this.blockSize &&
                (e.p1600(this.state), (this.count = 0));
        }),
        (m.prototype.absorbLastFewBits = function (u) {
          (this.state[~~(this.count / 4)] ^= u << ((this.count % 4) * 8)),
            128 & u && this.count === this.blockSize - 1 && e.p1600(this.state),
            (this.state[~~((this.blockSize - 1) / 4)] ^=
              128 << (((this.blockSize - 1) % 4) * 8)),
            e.p1600(this.state),
            (this.count = 0),
            (this.squeezing = !0);
        }),
        (m.prototype.squeeze = function (u) {
          this.squeezing || this.absorbLastFewBits(1);
          const f = Buffer.alloc(u);
          for (let h = 0; h < u; ++h)
            (f[h] =
              (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
              255),
              (this.count += 1),
              this.count === this.blockSize &&
                (e.p1600(this.state), (this.count = 0));
          return f;
        }),
        (m.prototype.copy = function (u) {
          for (let f = 0; f < 50; ++f) u.state[f] = this.state[f];
          (u.blockSize = this.blockSize),
            (u.count = this.count),
            (u.squeezing = this.squeezing);
        }),
        (I.exports = m);
    },
    7253: (I) => {
      var s = 1e3,
        d = 60 * s,
        e = 60 * d,
        m = 24 * e;
      function o(l, c, p, r) {
        var n = c >= 1.5 * p;
        return Math.round(l / p) + " " + r + (n ? "s" : "");
      }
      I.exports = function (l, c) {
        c = c || {};
        var p = typeof l;
        if ("string" === p && l.length > 0)
          return (function h(l) {
            if (!((l = String(l)).length > 100)) {
              var c =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  l
                );
              if (c) {
                var p = parseFloat(c[1]);
                switch ((c[2] || "ms").toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return 315576e5 * p;
                  case "weeks":
                  case "week":
                  case "w":
                    return 6048e5 * p;
                  case "days":
                  case "day":
                  case "d":
                    return p * m;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return p * e;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return p * d;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return p * s;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return p;
                  default:
                    return;
                }
              }
            }
          })(l);
        if ("number" === p && isFinite(l))
          return c.long
            ? (function i(l) {
                var c = Math.abs(l);
                return c >= m
                  ? o(l, c, m, "day")
                  : c >= e
                  ? o(l, c, e, "hour")
                  : c >= d
                  ? o(l, c, d, "minute")
                  : c >= s
                  ? o(l, c, s, "second")
                  : l + " ms";
              })(l)
            : (function t(l) {
                var c = Math.abs(l);
                return c >= m
                  ? Math.round(l / m) + "d"
                  : c >= e
                  ? Math.round(l / e) + "h"
                  : c >= d
                  ? Math.round(l / d) + "m"
                  : c >= s
                  ? Math.round(l / s) + "s"
                  : l + "ms";
              })(l);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(l)
        );
      };
    },
    4107: (I) => {
      "use strict";
      const s = (d, e) =>
        function () {
          const m = e.promiseModule,
            u = new Array(arguments.length);
          for (let f = 0; f < arguments.length; f++) u[f] = arguments[f];
          return new m((f, h) => {
            u.push(
              e.errorFirst
                ? function (t, i) {
                    if (e.multiArgs) {
                      const o = new Array(arguments.length - 1);
                      for (let l = 1; l < arguments.length; l++)
                        o[l - 1] = arguments[l];
                      t ? (o.unshift(t), h(o)) : f(o);
                    } else t ? h(t) : f(i);
                  }
                : function (t) {
                    if (e.multiArgs) {
                      const i = new Array(arguments.length - 1);
                      for (let o = 0; o < arguments.length; o++)
                        i[o] = arguments[o];
                      f(i);
                    } else f(t);
                  }
            ),
              d.apply(this, u);
          });
        };
      I.exports = (d, e) => {
        e = Object.assign(
          {
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise,
          },
          e
        );
        const m = (f) => {
          const h = (t) => ("string" == typeof t ? f === t : t.test(f));
          return e.include ? e.include.some(h) : !e.exclude.some(h);
        };
        let u;
        u =
          "function" == typeof d
            ? function () {
                return e.excludeMain
                  ? d.apply(this, arguments)
                  : s(d, e).apply(this, arguments);
              }
            : Object.create(Object.getPrototypeOf(d));
        for (const f in d) {
          const h = d[f];
          u[f] = "function" == typeof h && m(f) ? s(h, e) : h;
        }
        return u;
      };
    },
    4354: (I, s, d) => {
      "use strict";
      d.r(s),
        d.d(s, {
          Component: () => T,
          Fragment: () => S,
          cloneElement: () => j,
          createContext: () => F,
          createElement: () => b,
          createRef: () => w,
          h: () => b,
          hydrate: () => de,
          isValidElement: () => f,
          options: () => m,
          render: () => ce,
          toChildArray: () => Q,
        });
      var e,
        m,
        u,
        f,
        h,
        t,
        i,
        o,
        l,
        c,
        p,
        r,
        n = {},
        a = [],
        g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        y = Array.isArray;
      function _(A, N) {
        for (var D in N) A[D] = N[D];
        return A;
      }
      function v(A) {
        var N = A.parentNode;
        N && N.removeChild(A);
      }
      function b(A, N, D) {
        var C,
          R,
          L,
          J = {};
        for (L in N)
          "key" == L ? (C = N[L]) : "ref" == L ? (R = N[L]) : (J[L] = N[L]);
        if (
          (arguments.length > 2 &&
            (J.children = arguments.length > 3 ? e.call(arguments, 2) : D),
          "function" == typeof A && null != A.defaultProps)
        )
          for (L in A.defaultProps)
            void 0 === J[L] && (J[L] = A.defaultProps[L]);
        return E(A, J, C, R, null);
      }
      function E(A, N, D, C, R) {
        var L = {
          type: A,
          props: N,
          key: D,
          ref: C,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: R ?? ++u,
          __i: -1,
          __u: 0,
        };
        return null == R && null != m.vnode && m.vnode(L), L;
      }
      function w() {
        return { current: null };
      }
      function S(A) {
        return A.children;
      }
      function T(A, N) {
        (this.props = A), (this.context = N);
      }
      function k(A, N) {
        if (null == N) return A.__ ? k(A.__, A.__i + 1) : null;
        for (var D; N < A.__k.length; N++)
          if (null != (D = A.__k[N]) && null != D.__e) return D.__e;
        return "function" == typeof A.type ? k(A) : null;
      }
      function x(A) {
        var N, D;
        if (null != (A = A.__) && null != A.__c) {
          for (A.__e = A.__c.base = null, N = 0; N < A.__k.length; N++)
            if (null != (D = A.__k[N]) && null != D.__e) {
              A.__e = A.__c.base = D.__e;
              break;
            }
          return x(A);
        }
      }
      function $(A) {
        ((!A.__d && (A.__d = !0) && h.push(A) && !G.__r++) ||
          t !== m.debounceRendering) &&
          ((t = m.debounceRendering) || i)(G);
      }
      function G() {
        var A, N, D, C, R, L, J, se;
        for (h.sort(o); (A = h.shift()); )
          A.__d &&
            ((N = h.length),
            (C = void 0),
            (L = (R = (D = A).__v).__e),
            (J = []),
            (se = []),
            D.__P &&
              (((C = _({}, R)).__v = R.__v + 1),
              m.vnode && m.vnode(C),
              H(
                D.__P,
                C,
                R,
                D.__n,
                void 0 !== D.__P.ownerSVGElement,
                32 & R.__u ? [L] : null,
                J,
                L ?? k(R),
                !!(32 & R.__u),
                se
              ),
              (C.__v = R.__v),
              (C.__.__k[C.__i] = C),
              W(J, C, se),
              C.__e != L && x(C)),
            h.length > N && h.sort(o));
        G.__r = 0;
      }
      function re(A, N, D, C, R, L, J, se, ne, te, he) {
        var Z,
          fe,
          oe,
          pe,
          M,
          P = (C && C.__k) || a,
          O = N.length;
        for (
          D.__d = ne,
            (function le(A, N, D) {
              var C,
                R,
                L,
                J,
                se,
                ne = N.length,
                te = D.length,
                he = te,
                Z = 0;
              for (A.__k = [], C = 0; C < ne; C++)
                (J = C + Z),
                  null !=
                  (R = A.__k[C] =
                    null == (R = N[C]) ||
                    "boolean" == typeof R ||
                    "function" == typeof R
                      ? null
                      : "string" == typeof R ||
                        "number" == typeof R ||
                        "bigint" == typeof R ||
                        R.constructor == String
                      ? E(null, R, null, null, null)
                      : y(R)
                      ? E(S, { children: R }, null, null, null)
                      : void 0 === R.constructor && R.__b > 0
                      ? E(R.type, R.props, R.key, R.ref ? R.ref : null, R.__v)
                      : R)
                    ? ((R.__ = A),
                      (R.__b = A.__b + 1),
                      (se = X(R, D, J, he)),
                      (R.__i = se),
                      (L = null),
                      -1 !== se && (he--, (L = D[se]) && (L.__u |= 131072)),
                      null == L || null === L.__v
                        ? (-1 == se && Z--,
                          "function" != typeof R.type && (R.__u |= 65536))
                        : se !== J &&
                          (se === J + 1
                            ? Z++
                            : se > J
                            ? he > ne - J
                              ? (Z += se - J)
                              : Z--
                            : se < J
                            ? se == J - 1 && (Z = se - J)
                            : (Z = 0),
                          se !== C + Z && (R.__u |= 65536)))
                    : (L = D[J]) &&
                      null == L.key &&
                      L.__e &&
                      !(131072 & L.__u) &&
                      (L.__e == A.__d && (A.__d = k(L)),
                      ie(L, L, !1),
                      (D[J] = null),
                      he--);
              if (he)
                for (C = 0; C < te; C++)
                  null != (L = D[C]) &&
                    !(131072 & L.__u) &&
                    (L.__e == A.__d && (A.__d = k(L)), ie(L, L));
            })(D, N, P),
            ne = D.__d,
            Z = 0;
          Z < O;
          Z++
        )
          null != (oe = D.__k[Z]) &&
            "boolean" != typeof oe &&
            "function" != typeof oe &&
            ((fe = -1 === oe.__i ? n : P[oe.__i] || n),
            (oe.__i = Z),
            H(A, oe, fe, R, L, J, se, ne, te, he),
            (pe = oe.__e),
            oe.ref &&
              fe.ref != oe.ref &&
              (fe.ref && ee(fe.ref, null, oe),
              he.push(oe.ref, oe.__c || pe, oe)),
            null == M && null != pe && (M = pe),
            65536 & oe.__u || fe.__k === oe.__k
              ? (ne && !ne.isConnected && (ne = k(fe)), (ne = Y(oe, ne, A)))
              : "function" == typeof oe.type && void 0 !== oe.__d
              ? (ne = oe.__d)
              : pe && (ne = pe.nextSibling),
            (oe.__d = void 0),
            (oe.__u &= -196609));
        (D.__d = ne), (D.__e = M);
      }
      function Y(A, N, D) {
        var C, R;
        if ("function" == typeof A.type) {
          for (C = A.__k, R = 0; C && R < C.length; R++)
            C[R] && ((C[R].__ = A), (N = Y(C[R], N, D)));
          return N;
        }
        A.__e != N && (D.insertBefore(A.__e, N || null), (N = A.__e));
        do {
          N = N && N.nextSibling;
        } while (null != N && 8 === N.nodeType);
        return N;
      }
      function Q(A, N) {
        return (
          (N = N || []),
          null == A ||
            "boolean" == typeof A ||
            (y(A)
              ? A.some(function (D) {
                  Q(D, N);
                })
              : N.push(A)),
          N
        );
      }
      function X(A, N, D, C) {
        var R = A.key,
          L = A.type,
          J = D - 1,
          se = D + 1,
          ne = N[D];
        if (
          null === ne ||
          (ne && R == ne.key && L === ne.type && !(131072 & ne.__u))
        )
          return D;
        if (C > (null == ne || 131072 & ne.__u ? 0 : 1))
          for (; J >= 0 || se < N.length; ) {
            if (J >= 0) {
              if (
                (ne = N[J]) &&
                !(131072 & ne.__u) &&
                R == ne.key &&
                L === ne.type
              )
                return J;
              J--;
            }
            if (se < N.length) {
              if (
                (ne = N[se]) &&
                !(131072 & ne.__u) &&
                R == ne.key &&
                L === ne.type
              )
                return se;
              se++;
            }
          }
        return -1;
      }
      function B(A, N, D) {
        "-" === N[0]
          ? A.setProperty(N, D ?? "")
          : (A[N] =
              null == D
                ? ""
                : "number" != typeof D || g.test(N)
                ? D
                : D + "px");
      }
      function z(A, N, D, C, R) {
        var L;
        e: if ("style" === N)
          if ("string" == typeof D) A.style.cssText = D;
          else {
            if (("string" == typeof C && (A.style.cssText = C = ""), C))
              for (N in C) (D && N in D) || B(A.style, N, "");
            if (D) for (N in D) (C && D[N] === C[N]) || B(A.style, N, D[N]);
          }
        else if ("o" === N[0] && "n" === N[1])
          (L = N !== (N = N.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (N =
              N.toLowerCase() in A || "onFocusOut" === N || "onFocusIn" === N
                ? N.toLowerCase().slice(2)
                : N.slice(2)),
            A.l || (A.l = {}),
            (A.l[N + L] = D),
            D
              ? C
                ? (D.u = C.u)
                : ((D.u = l), A.addEventListener(N, L ? p : c, L))
              : A.removeEventListener(N, L ? p : c, L);
        else {
          if (R) N = N.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != N &&
            "height" != N &&
            "href" != N &&
            "list" != N &&
            "form" != N &&
            "tabIndex" != N &&
            "download" != N &&
            "rowSpan" != N &&
            "colSpan" != N &&
            "role" != N &&
            N in A
          )
            try {
              A[N] = D ?? "";
              break e;
            } catch {}
          "function" == typeof D ||
            (null == D || (!1 === D && "-" !== N[4])
              ? A.removeAttribute(N)
              : A.setAttribute(N, D));
        }
      }
      function K(A) {
        return function (N) {
          if (this.l) {
            var D = this.l[N.type + A];
            if (null == N.t) N.t = l++;
            else if (N.t < D.u) return;
            return D(m.event ? m.event(N) : N);
          }
        };
      }
      function H(A, N, D, C, R, L, J, se, ne, te) {
        var he,
          Z,
          fe,
          oe,
          pe,
          M,
          P,
          O,
          U,
          q,
          ae,
          ge,
          _e,
          me,
          be,
          ye = N.type;
        if (void 0 !== N.constructor) return null;
        128 & D.__u && ((ne = !!(32 & D.__u)), (L = [(se = N.__e = D.__e)])),
          (he = m.__b) && he(N);
        e: if ("function" == typeof ye)
          try {
            if (
              ((O = N.props),
              (U = (he = ye.contextType) && C[he.__c]),
              (q = he ? (U ? U.props.value : he.__) : C),
              D.__c
                ? (P = (Z = N.__c = D.__c).__ = Z.__E)
                : ("prototype" in ye && ye.prototype.render
                    ? (N.__c = Z = new ye(O, q))
                    : ((N.__c = Z = new T(O, q)),
                      (Z.constructor = ye),
                      (Z.render = ue)),
                  U && U.sub(Z),
                  (Z.props = O),
                  Z.state || (Z.state = {}),
                  (Z.context = q),
                  (Z.__n = C),
                  (fe = Z.__d = !0),
                  (Z.__h = []),
                  (Z._sb = [])),
              null == Z.__s && (Z.__s = Z.state),
              null != ye.getDerivedStateFromProps &&
                (Z.__s == Z.state && (Z.__s = _({}, Z.__s)),
                _(Z.__s, ye.getDerivedStateFromProps(O, Z.__s))),
              (oe = Z.props),
              (pe = Z.state),
              (Z.__v = N),
              fe)
            )
              null == ye.getDerivedStateFromProps &&
                null != Z.componentWillMount &&
                Z.componentWillMount(),
                null != Z.componentDidMount && Z.__h.push(Z.componentDidMount);
            else {
              if (
                (null == ye.getDerivedStateFromProps &&
                  O !== oe &&
                  null != Z.componentWillReceiveProps &&
                  Z.componentWillReceiveProps(O, q),
                !Z.__e &&
                  ((null != Z.shouldComponentUpdate &&
                    !1 === Z.shouldComponentUpdate(O, Z.__s, q)) ||
                    N.__v === D.__v))
              ) {
                for (
                  N.__v !== D.__v &&
                    ((Z.props = O), (Z.state = Z.__s), (Z.__d = !1)),
                    N.__e = D.__e,
                    N.__k = D.__k,
                    N.__k.forEach(function (ve) {
                      ve && (ve.__ = N);
                    }),
                    ae = 0;
                  ae < Z._sb.length;
                  ae++
                )
                  Z.__h.push(Z._sb[ae]);
                (Z._sb = []), Z.__h.length && J.push(Z);
                break e;
              }
              null != Z.componentWillUpdate &&
                Z.componentWillUpdate(O, Z.__s, q),
                null != Z.componentDidUpdate &&
                  Z.__h.push(function () {
                    Z.componentDidUpdate(oe, pe, M);
                  });
            }
            if (
              ((Z.context = q),
              (Z.props = O),
              (Z.__P = A),
              (Z.__e = !1),
              (ge = m.__r),
              (_e = 0),
              "prototype" in ye && ye.prototype.render)
            ) {
              for (
                Z.state = Z.__s,
                  Z.__d = !1,
                  ge && ge(N),
                  he = Z.render(Z.props, Z.state, Z.context),
                  me = 0;
                me < Z._sb.length;
                me++
              )
                Z.__h.push(Z._sb[me]);
              Z._sb = [];
            } else
              do {
                (Z.__d = !1),
                  ge && ge(N),
                  (he = Z.render(Z.props, Z.state, Z.context)),
                  (Z.state = Z.__s);
              } while (Z.__d && ++_e < 25);
            (Z.state = Z.__s),
              null != Z.getChildContext &&
                (C = _(_({}, C), Z.getChildContext())),
              fe ||
                null == Z.getSnapshotBeforeUpdate ||
                (M = Z.getSnapshotBeforeUpdate(oe, pe)),
              re(
                A,
                y(
                  (be =
                    null != he && he.type === S && null == he.key
                      ? he.props.children
                      : he)
                )
                  ? be
                  : [be],
                N,
                D,
                C,
                R,
                L,
                J,
                se,
                ne,
                te
              ),
              (Z.base = N.__e),
              (N.__u &= -161),
              Z.__h.length && J.push(Z),
              P && (Z.__E = Z.__ = null);
          } catch (ve) {
            (N.__v = null),
              ne || null != L
                ? ((N.__e = se),
                  (N.__u |= ne ? 160 : 32),
                  (L[L.indexOf(se)] = null))
                : ((N.__e = D.__e), (N.__k = D.__k)),
              m.__e(ve, N, D);
          }
        else
          null == L && N.__v === D.__v
            ? ((N.__k = D.__k), (N.__e = D.__e))
            : (N.__e = (function V(A, N, D, C, R, L, J, se, ne) {
                var te,
                  he,
                  Z,
                  fe,
                  oe,
                  pe,
                  M,
                  P = D.props,
                  O = N.props,
                  U = N.type;
                if (("svg" === U && (R = !0), null != L))
                  for (te = 0; te < L.length; te++)
                    if (
                      (oe = L[te]) &&
                      "setAttribute" in oe == !!U &&
                      (U ? oe.localName === U : 3 === oe.nodeType)
                    ) {
                      (A = oe), (L[te] = null);
                      break;
                    }
                if (null == A) {
                  if (null === U) return document.createTextNode(O);
                  (A = R
                    ? document.createElementNS("http://www.w3.org/2000/svg", U)
                    : document.createElement(U, O.is && O)),
                    (L = null),
                    (se = !1);
                }
                if (null === U) P === O || (se && A.data === O) || (A.data = O);
                else {
                  if (
                    ((L = L && e.call(A.childNodes)),
                    (P = D.props || n),
                    !se && null != L)
                  )
                    for (P = {}, te = 0; te < A.attributes.length; te++)
                      P[(oe = A.attributes[te]).name] = oe.value;
                  for (te in P)
                    if (((oe = P[te]), "children" != te))
                      if ("dangerouslySetInnerHTML" == te) Z = oe;
                      else if ("key" !== te && !(te in O)) {
                        if (
                          ("value" == te && "defaultValue" in O) ||
                          ("checked" == te && "defaultChecked" in O)
                        )
                          continue;
                        z(A, te, null, oe, R);
                      }
                  for (te in O)
                    (oe = O[te]),
                      "children" == te
                        ? (fe = oe)
                        : "dangerouslySetInnerHTML" == te
                        ? (he = oe)
                        : "value" == te
                        ? (pe = oe)
                        : "checked" == te
                        ? (M = oe)
                        : "key" === te ||
                          (se && "function" != typeof oe) ||
                          P[te] === oe ||
                          z(A, te, oe, P[te], R);
                  if (he)
                    se ||
                      (Z &&
                        (he.__html === Z.__html ||
                          he.__html === A.innerHTML)) ||
                      (A.innerHTML = he.__html),
                      (N.__k = []);
                  else if (
                    (Z && (A.innerHTML = ""),
                    re(
                      A,
                      y(fe) ? fe : [fe],
                      N,
                      D,
                      C,
                      R && "foreignObject" !== U,
                      L,
                      J,
                      L ? L[0] : D.__k && k(D, 0),
                      se,
                      ne
                    ),
                    null != L)
                  )
                    for (te = L.length; te--; ) null != L[te] && v(L[te]);
                  se ||
                    ((te = "value"),
                    void 0 !== pe &&
                      (pe !== A[te] ||
                        ("progress" === U && !pe) ||
                        ("option" === U && pe !== P[te])) &&
                      z(A, te, pe, P[te], !1),
                    (te = "checked"),
                    void 0 !== M && M !== A[te] && z(A, te, M, P[te], !1));
                }
                return A;
              })(D.__e, N, D, C, R, L, J, ne, te));
        (he = m.diffed) && he(N);
      }
      function W(A, N, D) {
        N.__d = void 0;
        for (var C = 0; C < D.length; C++) ee(D[C], D[++C], D[++C]);
        m.__c && m.__c(N, A),
          A.some(function (R) {
            try {
              (A = R.__h),
                (R.__h = []),
                A.some(function (L) {
                  L.call(R);
                });
            } catch (L) {
              m.__e(L, R.__v);
            }
          });
      }
      function ee(A, N, D) {
        try {
          "function" == typeof A ? A(N) : (A.current = N);
        } catch (C) {
          m.__e(C, D);
        }
      }
      function ie(A, N, D) {
        var C, R;
        if (
          (m.unmount && m.unmount(A),
          (C = A.ref) && ((C.current && C.current !== A.__e) || ee(C, null, N)),
          null != (C = A.__c))
        ) {
          if (C.componentWillUnmount)
            try {
              C.componentWillUnmount();
            } catch (L) {
              m.__e(L, N);
            }
          C.base = C.__P = null;
        }
        if ((C = A.__k))
          for (R = 0; R < C.length; R++)
            C[R] && ie(C[R], N, D || "function" != typeof A.type);
        D || null == A.__e || v(A.__e), (A.__c = A.__ = A.__e = A.__d = void 0);
      }
      function ue(A, N, D) {
        return this.constructor(A, D);
      }
      function ce(A, N, D) {
        var C, R, L, J;
        m.__ && m.__(A, N),
          (R = (C = "function" == typeof D) ? null : (D && D.__k) || N.__k),
          (L = []),
          (J = []),
          H(
            N,
            (A = ((!C && D) || N).__k = b(S, null, [A])),
            R || n,
            n,
            void 0 !== N.ownerSVGElement,
            !C && D
              ? [D]
              : R
              ? null
              : N.firstChild
              ? e.call(N.childNodes)
              : null,
            L,
            !C && D ? D : R ? R.__e : N.firstChild,
            C,
            J
          ),
          W(L, A, J);
      }
      function de(A, N) {
        ce(A, N, de);
      }
      function j(A, N, D) {
        var C,
          R,
          L,
          J,
          se = _({}, A.props);
        for (L in (A.type && A.type.defaultProps && (J = A.type.defaultProps),
        N))
          "key" == L
            ? (C = N[L])
            : "ref" == L
            ? (R = N[L])
            : (se[L] = void 0 === N[L] && void 0 !== J ? J[L] : N[L]);
        return (
          arguments.length > 2 &&
            (se.children = arguments.length > 3 ? e.call(arguments, 2) : D),
          E(A.type, se, C || A.key, R || A.ref, null)
        );
      }
      function F(A, N) {
        var D = {
          __c: (N = "__cC" + r++),
          __: A,
          Consumer: function (C, R) {
            return C.children(R);
          },
          Provider: function (C) {
            var R, L;
            return (
              this.getChildContext ||
                ((R = []),
                ((L = {})[N] = this),
                (this.getChildContext = function () {
                  return L;
                }),
                (this.shouldComponentUpdate = function (J) {
                  this.props.value !== J.value &&
                    R.some(function (se) {
                      (se.__e = !0), $(se);
                    });
                }),
                (this.sub = function (J) {
                  R.push(J);
                  var se = J.componentWillUnmount;
                  J.componentWillUnmount = function () {
                    R.splice(R.indexOf(J), 1), se && se.call(J);
                  };
                })),
              C.children
            );
          },
        };
        return (D.Provider.__ = D.Consumer.contextType = D);
      }
      (e = a.slice),
        (m = {
          __e: function (A, N, D, C) {
            for (var R, L, J; (N = N.__); )
              if ((R = N.__c) && !R.__)
                try {
                  if (
                    ((L = R.constructor) &&
                      null != L.getDerivedStateFromError &&
                      (R.setState(L.getDerivedStateFromError(A)), (J = R.__d)),
                    null != R.componentDidCatch &&
                      (R.componentDidCatch(A, C || {}), (J = R.__d)),
                    J)
                  )
                    return (R.__E = R);
                } catch (se) {
                  A = se;
                }
            throw A;
          },
        }),
        (u = 0),
        (f = function (A) {
          return null != A && null == A.constructor;
        }),
        (T.prototype.setState = function (A, N) {
          var D;
          (D =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = _({}, this.state))),
            "function" == typeof A && (A = A(_({}, D), this.props)),
            A && _(D, A),
            null != A && this.__v && (N && this._sb.push(N), $(this));
        }),
        (T.prototype.forceUpdate = function (A) {
          this.__v && ((this.__e = !0), A && this.__h.push(A), $(this));
        }),
        (T.prototype.render = S),
        (h = []),
        (i =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (o = function (A, N) {
          return A.__v.__b - N.__v.__b;
        }),
        (G.__r = 0),
        (l = 0),
        (c = K(!1)),
        (p = K(!0)),
        (r = 0);
    },
    491: (I, s, d) => {
      "use strict";
      d.r(s),
        d.d(s, {
          useCallback: () => k,
          useContext: () => x,
          useDebugValue: () => $,
          useEffect: () => b,
          useErrorBoundary: () => G,
          useId: () => re,
          useImperativeHandle: () => S,
          useLayoutEffect: () => E,
          useMemo: () => T,
          useReducer: () => v,
          useRef: () => w,
          useState: () => _,
        });
      var m,
        u,
        f,
        h,
        e = d(4354),
        t = 0,
        i = [],
        o = [],
        l = e.options,
        c = l.__b,
        p = l.__r,
        r = l.diffed,
        n = l.__c,
        a = l.unmount,
        g = l.__;
      function y(H, W) {
        l.__h && l.__h(u, H, t || W), (t = 0);
        var V = u.__H || (u.__H = { __: [], __h: [] });
        return H >= V.__.length && V.__.push({ __V: o }), V.__[H];
      }
      function _(H) {
        return (t = 1), v(K, H);
      }
      function v(H, W, V) {
        var ee = y(m++, 2);
        if (
          ((ee.t = H),
          !ee.__c &&
            ((ee.__ = [
              V ? V(W) : K(void 0, W),
              function (de) {
                var j = ee.__N ? ee.__N[0] : ee.__[0],
                  F = ee.t(j, de);
                j !== F && ((ee.__N = [F, ee.__[1]]), ee.__c.setState({}));
              },
            ]),
            (ee.__c = u),
            !u.u))
        ) {
          var ie = function (de, j, F) {
            if (!ee.__c.__H) return !0;
            var A = ee.__c.__H.__.filter(function (D) {
              return !!D.__c;
            });
            if (
              A.every(function (D) {
                return !D.__N;
              })
            )
              return !ue || ue.call(this, de, j, F);
            var N = !1;
            return (
              A.forEach(function (D) {
                if (D.__N) {
                  var C = D.__[0];
                  (D.__ = D.__N), (D.__N = void 0), C !== D.__[0] && (N = !0);
                }
              }),
              !(!N && ee.__c.props === de) && (!ue || ue.call(this, de, j, F))
            );
          };
          u.u = !0;
          var ue = u.shouldComponentUpdate,
            ce = u.componentWillUpdate;
          (u.componentWillUpdate = function (de, j, F) {
            if (this.__e) {
              var A = ue;
              (ue = void 0), ie(de, j, F), (ue = A);
            }
            ce && ce.call(this, de, j, F);
          }),
            (u.shouldComponentUpdate = ie);
        }
        return ee.__N || ee.__;
      }
      function b(H, W) {
        var V = y(m++, 3);
        !l.__s && z(V.__H, W) && ((V.__ = H), (V.i = W), u.__H.__h.push(V));
      }
      function E(H, W) {
        var V = y(m++, 4);
        !l.__s && z(V.__H, W) && ((V.__ = H), (V.i = W), u.__h.push(V));
      }
      function w(H) {
        return (
          (t = 5),
          T(function () {
            return { current: H };
          }, [])
        );
      }
      function S(H, W, V) {
        (t = 6),
          E(
            function () {
              return "function" == typeof H
                ? (H(W()),
                  function () {
                    return H(null);
                  })
                : H
                ? ((H.current = W()),
                  function () {
                    return (H.current = null);
                  })
                : void 0;
            },
            null == V ? V : V.concat(H)
          );
      }
      function T(H, W) {
        var V = y(m++, 7);
        return z(V.__H, W)
          ? ((V.__V = H()), (V.i = W), (V.__h = H), V.__V)
          : V.__;
      }
      function k(H, W) {
        return (
          (t = 8),
          T(function () {
            return H;
          }, W)
        );
      }
      function x(H) {
        var W = u.context[H.__c],
          V = y(m++, 9);
        return (
          (V.c = H),
          W ? (null == V.__ && ((V.__ = !0), W.sub(u)), W.props.value) : H.__
        );
      }
      function $(H, W) {
        l.useDebugValue && l.useDebugValue(W ? W(H) : H);
      }
      function G(H) {
        var W = y(m++, 10),
          V = _();
        return (
          (W.__ = H),
          u.componentDidCatch ||
            (u.componentDidCatch = function (ee, ie) {
              W.__ && W.__(ee, ie), V[1](ee);
            }),
          [
            V[0],
            function () {
              V[1](void 0);
            },
          ]
        );
      }
      function re() {
        var H = y(m++, 11);
        if (!H.__) {
          for (var W = u.__v; null !== W && !W.__m && null !== W.__; ) W = W.__;
          var V = W.__m || (W.__m = [0, 0]);
          H.__ = "P" + V[0] + "-" + V[1]++;
        }
        return H.__;
      }
      function le() {
        for (var H; (H = i.shift()); )
          if (H.__P && H.__H)
            try {
              H.__H.__h.forEach(X), H.__H.__h.forEach(B), (H.__H.__h = []);
            } catch (W) {
              (H.__H.__h = []), l.__e(W, H.__v);
            }
      }
      (l.__b = function (H) {
        (u = null), c && c(H);
      }),
        (l.__ = function (H, W) {
          H && W.__k && W.__k.__m && (H.__m = W.__k.__m), g && g(H, W);
        }),
        (l.__r = function (H) {
          p && p(H), (m = 0);
          var W = (u = H.__c).__H;
          W &&
            (f === u
              ? ((W.__h = []),
                (u.__h = []),
                W.__.forEach(function (V) {
                  V.__N && (V.__ = V.__N), (V.__V = o), (V.__N = V.i = void 0);
                }))
              : (W.__h.forEach(X), W.__h.forEach(B), (W.__h = []), (m = 0))),
            (f = u);
        }),
        (l.diffed = function (H) {
          r && r(H);
          var W = H.__c;
          W &&
            W.__H &&
            (W.__H.__h.length &&
              ((1 !== i.push(W) && h === l.requestAnimationFrame) ||
                ((h = l.requestAnimationFrame) || Q)(le)),
            W.__H.__.forEach(function (V) {
              V.i && (V.__H = V.i),
                V.__V !== o && (V.__ = V.__V),
                (V.i = void 0),
                (V.__V = o);
            })),
            (f = u = null);
        }),
        (l.__c = function (H, W) {
          W.some(function (V) {
            try {
              V.__h.forEach(X),
                (V.__h = V.__h.filter(function (ee) {
                  return !ee.__ || B(ee);
                }));
            } catch (ee) {
              W.some(function (ie) {
                ie.__h && (ie.__h = []);
              }),
                (W = []),
                l.__e(ee, V.__v);
            }
          }),
            n && n(H, W);
        }),
        (l.unmount = function (H) {
          a && a(H);
          var W,
            V = H.__c;
          V &&
            V.__H &&
            (V.__H.__.forEach(function (ee) {
              try {
                X(ee);
              } catch (ie) {
                W = ie;
              }
            }),
            (V.__H = void 0),
            W && l.__e(W, V.__v));
        });
      var Y = "function" == typeof requestAnimationFrame;
      function Q(H) {
        var W,
          V = function () {
            clearTimeout(ee), Y && cancelAnimationFrame(W), setTimeout(H);
          },
          ee = setTimeout(V, 100);
        Y && (W = requestAnimationFrame(V));
      }
      function X(H) {
        var W = u,
          V = H.__c;
        "function" == typeof V && ((H.__c = void 0), V()), (u = W);
      }
      function B(H) {
        var W = u;
        (H.__c = H.__()), (u = W);
      }
      function z(H, W) {
        return (
          !H ||
          H.length !== W.length ||
          W.some(function (V, ee) {
            return V !== H[ee];
          })
        );
      }
      function K(H, W) {
        return "function" == typeof W ? W(H) : W;
      }
    },
    7218: (I) => {
      "use strict";
      var d = {};
      function e(t, i, o) {
        o || (o = Error);
        var c = (function (p) {
          function r(n, a, g) {
            return (
              p.call(
                this,
                (function l(p, r, n) {
                  return "string" == typeof i ? i : i(p, r, n);
                })(n, a, g)
              ) || this
            );
          }
          return (
            (function s(t, i) {
              (t.prototype = Object.create(i.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = i);
            })(r, p),
            r
          );
        })(o);
        (c.prototype.name = o.name), (c.prototype.code = t), (d[t] = c);
      }
      function m(t, i) {
        if (Array.isArray(t)) {
          var o = t.length;
          return (
            (t = t.map(function (l) {
              return String(l);
            })),
            o > 2
              ? "one of "
                  .concat(i, " ")
                  .concat(t.slice(0, o - 1).join(", "), ", or ") + t[o - 1]
              : 2 === o
              ? "one of ".concat(i, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(i, " ").concat(t[0])
          );
        }
        return "of ".concat(i, " ").concat(String(t));
      }
      e(
        "ERR_INVALID_OPT_VALUE",
        function (t, i) {
          return 'The value "' + i + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        e(
          "ERR_INVALID_ARG_TYPE",
          function (t, i, o) {
            var l, c;
            if (
              ("string" == typeof i &&
              (function u(t, i, o) {
                return t.substr(!o || o < 0 ? 0 : +o, i.length) === i;
              })(i, "not ")
                ? ((l = "must not be"), (i = i.replace(/^not /, "")))
                : (l = "must be"),
              (function f(t, i, o) {
                return (
                  (void 0 === o || o > t.length) && (o = t.length),
                  t.substring(o - i.length, o) === i
                );
              })(t, " argument"))
            )
              c = "The ".concat(t, " ").concat(l, " ").concat(m(i, "type"));
            else {
              var p = (function h(t, i, o) {
                return (
                  "number" != typeof o && (o = 0),
                  !(o + i.length > t.length) && -1 !== t.indexOf(i, o)
                );
              })(t, ".")
                ? "property"
                : "argument";
              c = 'The "'
                .concat(t, '" ')
                .concat(p, " ")
                .concat(l, " ")
                .concat(m(i, "type"));
            }
            return c + ". Received type ".concat(typeof o);
          },
          TypeError
        ),
        e("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        e("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        e("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        e("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        e("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        e("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        e("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        e(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        e(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        e(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (I.exports.q = d);
    },
    247: (I, s, d) => {
      "use strict";
      var e =
        Object.keys ||
        function (c) {
          var p = [];
          for (var r in c) p.push(r);
          return p;
        };
      I.exports = i;
      var m = d(309),
        u = d(6563);
      d(6698)(i, m);
      for (var f = e(u.prototype), h = 0; h < f.length; h++) {
        var t = f[h];
        i.prototype[t] || (i.prototype[t] = u.prototype[t]);
      }
      function i(c) {
        if (!(this instanceof i)) return new i(c);
        m.call(this, c),
          u.call(this, c),
          (this.allowHalfOpen = !0),
          c &&
            (!1 === c.readable && (this.readable = !1),
            !1 === c.writable && (this.writable = !1),
            !1 === c.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", o)));
      }
      function o() {
        this._writableState.ended || process.nextTick(l, this);
      }
      function l(c) {
        c.end();
      }
      Object.defineProperty(i.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(i.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(i.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(i.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (p) {
            void 0 === this._readableState ||
              void 0 === this._writableState ||
              ((this._readableState.destroyed = p),
              (this._writableState.destroyed = p));
          },
        });
    },
    5096: (I, s, d) => {
      "use strict";
      I.exports = m;
      var e = d(6307);
      function m(u) {
        if (!(this instanceof m)) return new m(u);
        e.call(this, u);
      }
      d(6698)(m, e),
        (m.prototype._transform = function (u, f, h) {
          h(null, u);
        });
    },
    309: (I, s, d) => {
      "use strict";
      var e;
      (I.exports = G), (G.ReadableState = $), d(2016);
      var c,
        u = function (R, L) {
          return R.listeners(L).length;
        },
        f = d(8240),
        h = d(9007).Buffer,
        t =
          (typeof global < "u"
            ? global
            : typeof window < "u"
            ? window
            : typeof self < "u"
            ? self
            : {}
          ).Uint8Array || function () {},
        l = d(4616);
      c = l && l.debuglog ? l.debuglog("stream") : function () {};
      var E,
        w,
        S,
        p = d(2960),
        r = d(5601),
        a = d(8782).getHighWaterMark,
        g = d(7218).q,
        y = g.ERR_INVALID_ARG_TYPE,
        _ = g.ERR_STREAM_PUSH_AFTER_EOF,
        v = g.ERR_METHOD_NOT_IMPLEMENTED,
        b = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      d(6698)(G, f);
      var T = r.errorOrDestroy,
        k = ["error", "close", "destroy", "pause", "resume"];
      function $(C, R, L) {
        (e = e || d(247)),
          "boolean" != typeof L && (L = R instanceof e),
          (this.objectMode = !!(C = C || {}).objectMode),
          L && (this.objectMode = this.objectMode || !!C.readableObjectMode),
          (this.highWaterMark = a(this, C, "readableHighWaterMark", L)),
          (this.buffer = new p()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== C.emitClose),
          (this.autoDestroy = !!C.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = C.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          C.encoding &&
            (E || (E = d(2024).s),
            (this.decoder = new E(C.encoding)),
            (this.encoding = C.encoding));
      }
      function G(C) {
        if (((e = e || d(247)), !(this instanceof G))) return new G(C);
        (this._readableState = new $(C, this, this instanceof e)),
          (this.readable = !0),
          C &&
            ("function" == typeof C.read && (this._read = C.read),
            "function" == typeof C.destroy && (this._destroy = C.destroy)),
          f.call(this);
      }
      function re(C, R, L, J, se) {
        c("readableAddChunk", R);
        var te,
          ne = C._readableState;
        if (null === R)
          (ne.reading = !1),
            (function z(C, R) {
              if ((c("onEofChunk"), !R.ended)) {
                if (R.decoder) {
                  var L = R.decoder.end();
                  L &&
                    L.length &&
                    (R.buffer.push(L),
                    (R.length += R.objectMode ? 1 : L.length));
                }
                (R.ended = !0),
                  R.sync
                    ? K(C)
                    : ((R.needReadable = !1),
                      R.emittedReadable || ((R.emittedReadable = !0), H(C)));
              }
            })(C, ne);
        else if (
          (se ||
            (te = (function Y(C, R) {
              var L;
              return (
                !(function o(C) {
                  return h.isBuffer(C) || C instanceof t;
                })(R) &&
                  "string" != typeof R &&
                  void 0 !== R &&
                  !C.objectMode &&
                  (L = new y("chunk", ["string", "Buffer", "Uint8Array"], R)),
                L
              );
            })(ne, R)),
          te)
        )
          T(C, te);
        else if (ne.objectMode || (R && R.length > 0))
          if (
            ("string" != typeof R &&
              !ne.objectMode &&
              Object.getPrototypeOf(R) !== h.prototype &&
              (R = (function i(C) {
                return h.from(C);
              })(R)),
            J)
          )
            ne.endEmitted ? T(C, new b()) : le(C, ne, R, !0);
          else if (ne.ended) T(C, new _());
          else {
            if (ne.destroyed) return !1;
            (ne.reading = !1),
              ne.decoder && !L
                ? ((R = ne.decoder.write(R)),
                  ne.objectMode || 0 !== R.length ? le(C, ne, R, !1) : W(C, ne))
                : le(C, ne, R, !1);
          }
        else J || ((ne.reading = !1), W(C, ne));
        return !ne.ended && (ne.length < ne.highWaterMark || 0 === ne.length);
      }
      function le(C, R, L, J) {
        R.flowing && 0 === R.length && !R.sync
          ? ((R.awaitDrain = 0), C.emit("data", L))
          : ((R.length += R.objectMode ? 1 : L.length),
            J ? R.buffer.unshift(L) : R.buffer.push(L),
            R.needReadable && K(C)),
          W(C, R);
      }
      Object.defineProperty(G.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (R) {
          this._readableState && (this._readableState.destroyed = R);
        },
      }),
        (G.prototype.destroy = r.destroy),
        (G.prototype._undestroy = r.undestroy),
        (G.prototype._destroy = function (C, R) {
          R(C);
        }),
        (G.prototype.push = function (C, R) {
          var J,
            L = this._readableState;
          return (
            L.objectMode
              ? (J = !0)
              : "string" == typeof C &&
                ((R = R || L.defaultEncoding) !== L.encoding &&
                  ((C = h.from(C, R)), (R = "")),
                (J = !0)),
            re(this, C, R, !1, J)
          );
        }),
        (G.prototype.unshift = function (C) {
          return re(this, C, null, !0, !1);
        }),
        (G.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (G.prototype.setEncoding = function (C) {
          E || (E = d(2024).s);
          var R = new E(C);
          (this._readableState.decoder = R),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var L = this._readableState.buffer.head, J = ""; null !== L; )
            (J += R.write(L.data)), (L = L.next);
          return (
            this._readableState.buffer.clear(),
            "" !== J && this._readableState.buffer.push(J),
            (this._readableState.length = J.length),
            this
          );
        });
      var Q = 1073741824;
      function B(C, R) {
        return C <= 0 || (0 === R.length && R.ended)
          ? 0
          : R.objectMode
          ? 1
          : C != C
          ? R.flowing && R.length
            ? R.buffer.head.data.length
            : R.length
          : (C > R.highWaterMark &&
              (R.highWaterMark = (function X(C) {
                return (
                  C >= Q
                    ? (C = Q)
                    : (C--,
                      (C |= C >>> 1),
                      (C |= C >>> 2),
                      (C |= C >>> 4),
                      (C |= C >>> 8),
                      (C |= C >>> 16),
                      C++),
                  C
                );
              })(C)),
            C <= R.length
              ? C
              : R.ended
              ? R.length
              : ((R.needReadable = !0), 0));
      }
      function K(C) {
        var R = C._readableState;
        c("emitReadable", R.needReadable, R.emittedReadable),
          (R.needReadable = !1),
          R.emittedReadable ||
            (c("emitReadable", R.flowing),
            (R.emittedReadable = !0),
            process.nextTick(H, C));
      }
      function H(C) {
        var R = C._readableState;
        c("emitReadable_", R.destroyed, R.length, R.ended),
          !R.destroyed &&
            (R.length || R.ended) &&
            (C.emit("readable"), (R.emittedReadable = !1)),
          (R.needReadable =
            !R.flowing && !R.ended && R.length <= R.highWaterMark),
          j(C);
      }
      function W(C, R) {
        R.readingMore || ((R.readingMore = !0), process.nextTick(V, C, R));
      }
      function V(C, R) {
        for (
          ;
          !R.reading &&
          !R.ended &&
          (R.length < R.highWaterMark || (R.flowing && 0 === R.length));

        ) {
          var L = R.length;
          if ((c("maybeReadMore read 0"), C.read(0), L === R.length)) break;
        }
        R.readingMore = !1;
      }
      function ie(C) {
        var R = C._readableState;
        (R.readableListening = C.listenerCount("readable") > 0),
          R.resumeScheduled && !R.paused
            ? (R.flowing = !0)
            : C.listenerCount("data") > 0 && C.resume();
      }
      function ue(C) {
        c("readable nexttick read 0"), C.read(0);
      }
      function de(C, R) {
        c("resume", R.reading),
          R.reading || C.read(0),
          (R.resumeScheduled = !1),
          C.emit("resume"),
          j(C),
          R.flowing && !R.reading && C.read(0);
      }
      function j(C) {
        var R = C._readableState;
        for (c("flow", R.flowing); R.flowing && null !== C.read(); );
      }
      function F(C, R) {
        return 0 === R.length
          ? null
          : (R.objectMode
              ? (L = R.buffer.shift())
              : !C || C >= R.length
              ? ((L = R.decoder
                  ? R.buffer.join("")
                  : 1 === R.buffer.length
                  ? R.buffer.first()
                  : R.buffer.concat(R.length)),
                R.buffer.clear())
              : (L = R.buffer.consume(C, R.decoder)),
            L);
        var L;
      }
      function A(C) {
        var R = C._readableState;
        c("endReadable", R.endEmitted),
          R.endEmitted || ((R.ended = !0), process.nextTick(N, R, C));
      }
      function N(C, R) {
        if (
          (c("endReadableNT", C.endEmitted, C.length),
          !C.endEmitted &&
            0 === C.length &&
            ((C.endEmitted = !0),
            (R.readable = !1),
            R.emit("end"),
            C.autoDestroy))
        ) {
          var L = R._writableState;
          (!L || (L.autoDestroy && L.finished)) && R.destroy();
        }
      }
      function D(C, R) {
        for (var L = 0, J = C.length; L < J; L++) if (C[L] === R) return L;
        return -1;
      }
      (G.prototype.read = function (C) {
        c("read", C), (C = parseInt(C, 10));
        var R = this._readableState,
          L = C;
        if (
          (0 !== C && (R.emittedReadable = !1),
          0 === C &&
            R.needReadable &&
            ((0 !== R.highWaterMark
              ? R.length >= R.highWaterMark
              : R.length > 0) ||
              R.ended))
        )
          return (
            c("read: emitReadable", R.length, R.ended),
            0 === R.length && R.ended ? A(this) : K(this),
            null
          );
        if (0 === (C = B(C, R)) && R.ended)
          return 0 === R.length && A(this), null;
        var se,
          J = R.needReadable;
        return (
          c("need readable", J),
          (0 === R.length || R.length - C < R.highWaterMark) &&
            c("length less than watermark", (J = !0)),
          R.ended || R.reading
            ? c("reading or ended", (J = !1))
            : J &&
              (c("do read"),
              (R.reading = !0),
              (R.sync = !0),
              0 === R.length && (R.needReadable = !0),
              this._read(R.highWaterMark),
              (R.sync = !1),
              R.reading || (C = B(L, R))),
          null === (se = C > 0 ? F(C, R) : null)
            ? ((R.needReadable = R.length <= R.highWaterMark), (C = 0))
            : ((R.length -= C), (R.awaitDrain = 0)),
          0 === R.length &&
            (R.ended || (R.needReadable = !0), L !== C && R.ended && A(this)),
          null !== se && this.emit("data", se),
          se
        );
      }),
        (G.prototype._read = function (C) {
          T(this, new v("_read()"));
        }),
        (G.prototype.pipe = function (C, R) {
          var L = this,
            J = this._readableState;
          switch (J.pipesCount) {
            case 0:
              J.pipes = C;
              break;
            case 1:
              J.pipes = [J.pipes, C];
              break;
            default:
              J.pipes.push(C);
          }
          (J.pipesCount += 1), c("pipe count=%d opts=%j", J.pipesCount, R);
          var ne =
            (R && !1 === R.end) || C === process.stdout || C === process.stderr
              ? U
              : he;
          function he() {
            c("onend"), C.end();
          }
          J.endEmitted ? process.nextTick(ne) : L.once("end", ne),
            C.on("unpipe", function te(q, ae) {
              c("onunpipe"),
                q === L &&
                  ae &&
                  !1 === ae.hasUnpiped &&
                  ((ae.hasUnpiped = !0),
                  (function oe() {
                    c("cleanup"),
                      C.removeListener("close", P),
                      C.removeListener("finish", O),
                      C.removeListener("drain", Z),
                      C.removeListener("error", M),
                      C.removeListener("unpipe", te),
                      L.removeListener("end", he),
                      L.removeListener("end", U),
                      L.removeListener("data", pe),
                      (fe = !0),
                      J.awaitDrain &&
                        (!C._writableState || C._writableState.needDrain) &&
                        Z();
                  })());
            });
          var Z = (function ee(C) {
            return function () {
              var L = C._readableState;
              c("pipeOnDrain", L.awaitDrain),
                L.awaitDrain && L.awaitDrain--,
                0 === L.awaitDrain && u(C, "data") && ((L.flowing = !0), j(C));
            };
          })(L);
          C.on("drain", Z);
          var fe = !1;
          function pe(q) {
            c("ondata");
            var ae = C.write(q);
            c("dest.write", ae),
              !1 === ae &&
                (((1 === J.pipesCount && J.pipes === C) ||
                  (J.pipesCount > 1 && -1 !== D(J.pipes, C))) &&
                  !fe &&
                  (c("false write response, pause", J.awaitDrain),
                  J.awaitDrain++),
                L.pause());
          }
          function M(q) {
            c("onerror", q),
              U(),
              C.removeListener("error", M),
              0 === u(C, "error") && T(C, q);
          }
          function P() {
            C.removeListener("finish", O), U();
          }
          function O() {
            c("onfinish"), C.removeListener("close", P), U();
          }
          function U() {
            c("unpipe"), L.unpipe(C);
          }
          return (
            L.on("data", pe),
            (function x(C, R, L) {
              if ("function" == typeof C.prependListener)
                return C.prependListener(R, L);
              C._events && C._events[R]
                ? Array.isArray(C._events[R])
                  ? C._events[R].unshift(L)
                  : (C._events[R] = [L, C._events[R]])
                : C.on(R, L);
            })(C, "error", M),
            C.once("close", P),
            C.once("finish", O),
            C.emit("pipe", L),
            J.flowing || (c("pipe resume"), L.resume()),
            C
          );
        }),
        (G.prototype.unpipe = function (C) {
          var R = this._readableState,
            L = { hasUnpiped: !1 };
          if (0 === R.pipesCount) return this;
          if (1 === R.pipesCount)
            return (
              (C && C !== R.pipes) ||
                (C || (C = R.pipes),
                (R.pipes = null),
                (R.pipesCount = 0),
                (R.flowing = !1),
                C && C.emit("unpipe", this, L)),
              this
            );
          if (!C) {
            var J = R.pipes,
              se = R.pipesCount;
            (R.pipes = null), (R.pipesCount = 0), (R.flowing = !1);
            for (var ne = 0; ne < se; ne++)
              J[ne].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var te = D(R.pipes, C);
          return (
            -1 === te ||
              (R.pipes.splice(te, 1),
              (R.pipesCount -= 1),
              1 === R.pipesCount && (R.pipes = R.pipes[0]),
              C.emit("unpipe", this, L)),
            this
          );
        }),
        (G.prototype.addListener = G.prototype.on =
          function (C, R) {
            var L = f.prototype.on.call(this, C, R),
              J = this._readableState;
            return (
              "data" === C
                ? ((J.readableListening = this.listenerCount("readable") > 0),
                  !1 !== J.flowing && this.resume())
                : "readable" === C &&
                  !J.endEmitted &&
                  !J.readableListening &&
                  ((J.readableListening = J.needReadable = !0),
                  (J.flowing = !1),
                  (J.emittedReadable = !1),
                  c("on readable", J.length, J.reading),
                  J.length ? K(this) : J.reading || process.nextTick(ue, this)),
              L
            );
          }),
        (G.prototype.removeListener = function (C, R) {
          var L = f.prototype.removeListener.call(this, C, R);
          return "readable" === C && process.nextTick(ie, this), L;
        }),
        (G.prototype.removeAllListeners = function (C) {
          var R = f.prototype.removeAllListeners.apply(this, arguments);
          return (
            ("readable" === C || void 0 === C) && process.nextTick(ie, this), R
          );
        }),
        (G.prototype.resume = function () {
          var C = this._readableState;
          return (
            C.flowing ||
              (c("resume"),
              (C.flowing = !C.readableListening),
              (function ce(C, R) {
                R.resumeScheduled ||
                  ((R.resumeScheduled = !0), process.nextTick(de, C, R));
              })(this, C)),
            (C.paused = !1),
            this
          );
        }),
        (G.prototype.pause = function () {
          return (
            c("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (c("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (G.prototype.wrap = function (C) {
          var R = this,
            L = this._readableState,
            J = !1;
          for (var se in (C.on("end", function () {
            if ((c("wrapped end"), L.decoder && !L.ended)) {
              var te = L.decoder.end();
              te && te.length && R.push(te);
            }
            R.push(null);
          }),
          C.on("data", function (te) {
            c("wrapped data"),
              L.decoder && (te = L.decoder.write(te)),
              (L.objectMode && null == te) ||
                !(L.objectMode || (te && te.length)) ||
                R.push(te) ||
                ((J = !0), C.pause());
          }),
          C))
            void 0 === this[se] &&
              "function" == typeof C[se] &&
              (this[se] = (function (he) {
                return function () {
                  return C[he].apply(C, arguments);
                };
              })(se));
          for (var ne = 0; ne < k.length; ne++)
            C.on(k[ne], this.emit.bind(this, k[ne]));
          return (
            (this._read = function (te) {
              c("wrapped _read", te), J && ((J = !1), C.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (G.prototype[Symbol.asyncIterator] = function () {
            return void 0 === w && (w = d(457)), w(this);
          }),
        Object.defineProperty(G.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(G.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(G.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (R) {
            this._readableState && (this._readableState.flowing = R);
          },
        }),
        (G._fromList = F),
        Object.defineProperty(G.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" == typeof Symbol &&
          (G.from = function (C, R) {
            return void 0 === S && (S = d(3335)), S(G, C, R);
          });
    },
    6307: (I, s, d) => {
      "use strict";
      I.exports = o;
      var e = d(7218).q,
        m = e.ERR_METHOD_NOT_IMPLEMENTED,
        u = e.ERR_MULTIPLE_CALLBACK,
        f = e.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        h = e.ERR_TRANSFORM_WITH_LENGTH_0,
        t = d(247);
      function i(p, r) {
        var n = this._transformState;
        n.transforming = !1;
        var a = n.writecb;
        if (null === a) return this.emit("error", new u());
        (n.writechunk = null),
          (n.writecb = null),
          null != r && this.push(r),
          a(p);
        var g = this._readableState;
        (g.reading = !1),
          (g.needReadable || g.length < g.highWaterMark) &&
            this._read(g.highWaterMark);
      }
      function o(p) {
        if (!(this instanceof o)) return new o(p);
        t.call(this, p),
          (this._transformState = {
            afterTransform: i.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          p &&
            ("function" == typeof p.transform &&
              (this._transform = p.transform),
            "function" == typeof p.flush && (this._flush = p.flush)),
          this.on("prefinish", l);
      }
      function l() {
        var p = this;
        "function" != typeof this._flush || this._readableState.destroyed
          ? c(this, null, null)
          : this._flush(function (r, n) {
              c(p, r, n);
            });
      }
      function c(p, r, n) {
        if (r) return p.emit("error", r);
        if ((null != n && p.push(n), p._writableState.length)) throw new h();
        if (p._transformState.transforming) throw new f();
        return p.push(null);
      }
      d(6698)(o, t),
        (o.prototype.push = function (p, r) {
          return (
            (this._transformState.needTransform = !1),
            t.prototype.push.call(this, p, r)
          );
        }),
        (o.prototype._transform = function (p, r, n) {
          n(new m("_transform()"));
        }),
        (o.prototype._write = function (p, r, n) {
          var a = this._transformState;
          if (
            ((a.writecb = n),
            (a.writechunk = p),
            (a.writeencoding = r),
            !a.transforming)
          ) {
            var g = this._readableState;
            (a.needTransform || g.needReadable || g.length < g.highWaterMark) &&
              this._read(g.highWaterMark);
          }
        }),
        (o.prototype._read = function (p) {
          var r = this._transformState;
          null === r.writechunk || r.transforming
            ? (r.needTransform = !0)
            : ((r.transforming = !0),
              this._transform(r.writechunk, r.writeencoding, r.afterTransform));
        }),
        (o.prototype._destroy = function (p, r) {
          t.prototype._destroy.call(this, p, function (n) {
            r(n);
          });
        });
    },
    6563: (I, s, d) => {
      "use strict";
      function m(j) {
        var F = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function de(j, F, A) {
              var N = j.entry;
              for (j.entry = null; N; ) {
                var D = N.callback;
                F.pendingcb--, D(A), (N = N.next);
              }
              F.corkedRequestsFree.next = j;
            })(F, j);
          });
      }
      var u;
      (I.exports = $), ($.WritableState = k);
      var x,
        f = { deprecate: d(496) },
        h = d(8240),
        t = d(9007).Buffer,
        i =
          (typeof global < "u"
            ? global
            : typeof window < "u"
            ? window
            : typeof self < "u"
            ? self
            : {}
          ).Uint8Array || function () {},
        c = d(5601),
        r = d(8782).getHighWaterMark,
        n = d(7218).q,
        a = n.ERR_INVALID_ARG_TYPE,
        g = n.ERR_METHOD_NOT_IMPLEMENTED,
        y = n.ERR_MULTIPLE_CALLBACK,
        _ = n.ERR_STREAM_CANNOT_PIPE,
        v = n.ERR_STREAM_DESTROYED,
        b = n.ERR_STREAM_NULL_VALUES,
        E = n.ERR_STREAM_WRITE_AFTER_END,
        w = n.ERR_UNKNOWN_ENCODING,
        S = c.errorOrDestroy;
      function T() {}
      function k(j, F, A) {
        (u = u || d(247)),
          "boolean" != typeof A && (A = F instanceof u),
          (this.objectMode = !!(j = j || {}).objectMode),
          A && (this.objectMode = this.objectMode || !!j.writableObjectMode),
          (this.highWaterMark = r(this, j, "writableHighWaterMark", A)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1),
          (this.decodeStrings = !(!1 === j.decodeStrings)),
          (this.defaultEncoding = j.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (D) {
            !(function z(j, F) {
              var A = j._writableState,
                N = A.sync,
                D = A.writecb;
              if ("function" != typeof D) throw new y();
              if (
                ((function B(j) {
                  (j.writing = !1),
                    (j.writecb = null),
                    (j.length -= j.writelen),
                    (j.writelen = 0);
                })(A),
                F)
              )
                !(function X(j, F, A, N, D) {
                  --F.pendingcb,
                    A
                      ? (process.nextTick(D, N),
                        process.nextTick(ue, j, F),
                        (j._writableState.errorEmitted = !0),
                        S(j, N))
                      : (D(N),
                        (j._writableState.errorEmitted = !0),
                        S(j, N),
                        ue(j, F));
                })(j, A, N, F, D);
              else {
                var C = V(A) || j.destroyed;
                !C &&
                  !A.corked &&
                  !A.bufferProcessing &&
                  A.bufferedRequest &&
                  W(j, A),
                  N ? process.nextTick(K, j, A, C, D) : K(j, A, C, D);
              }
            })(F, D);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== j.emitClose),
          (this.autoDestroy = !!j.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new m(this));
      }
      function $(j) {
        var F = this instanceof (u = u || d(247));
        if (!F && !x.call($, this)) return new $(j);
        (this._writableState = new k(j, this, F)),
          (this.writable = !0),
          j &&
            ("function" == typeof j.write && (this._write = j.write),
            "function" == typeof j.writev && (this._writev = j.writev),
            "function" == typeof j.destroy && (this._destroy = j.destroy),
            "function" == typeof j.final && (this._final = j.final)),
          h.call(this);
      }
      function Q(j, F, A, N, D, C, R) {
        (F.writelen = N),
          (F.writecb = R),
          (F.writing = !0),
          (F.sync = !0),
          F.destroyed
            ? F.onwrite(new v("write"))
            : A
            ? j._writev(D, F.onwrite)
            : j._write(D, C, F.onwrite),
          (F.sync = !1);
      }
      function K(j, F, A, N) {
        A ||
          (function H(j, F) {
            0 === F.length &&
              F.needDrain &&
              ((F.needDrain = !1), j.emit("drain"));
          })(j, F),
          F.pendingcb--,
          N(),
          ue(j, F);
      }
      function W(j, F) {
        F.bufferProcessing = !0;
        var A = F.bufferedRequest;
        if (j._writev && A && A.next) {
          var D = new Array(F.bufferedRequestCount),
            C = F.corkedRequestsFree;
          C.entry = A;
          for (var R = 0, L = !0; A; )
            (D[R] = A), A.isBuf || (L = !1), (A = A.next), (R += 1);
          (D.allBuffers = L),
            Q(j, F, !0, F.length, D, "", C.finish),
            F.pendingcb++,
            (F.lastBufferedRequest = null),
            C.next
              ? ((F.corkedRequestsFree = C.next), (C.next = null))
              : (F.corkedRequestsFree = new m(F)),
            (F.bufferedRequestCount = 0);
        } else {
          for (; A; ) {
            var J = A.chunk;
            if (
              (Q(
                j,
                F,
                !1,
                F.objectMode ? 1 : J.length,
                J,
                A.encoding,
                A.callback
              ),
              (A = A.next),
              F.bufferedRequestCount--,
              F.writing)
            )
              break;
          }
          null === A && (F.lastBufferedRequest = null);
        }
        (F.bufferedRequest = A), (F.bufferProcessing = !1);
      }
      function V(j) {
        return (
          j.ending &&
          0 === j.length &&
          null === j.bufferedRequest &&
          !j.finished &&
          !j.writing
        );
      }
      function ee(j, F) {
        j._final(function (A) {
          F.pendingcb--,
            A && S(j, A),
            (F.prefinished = !0),
            j.emit("prefinish"),
            ue(j, F);
        });
      }
      function ue(j, F) {
        var A = V(F);
        if (
          A &&
          ((function ie(j, F) {
            !F.prefinished &&
              !F.finalCalled &&
              ("function" != typeof j._final || F.destroyed
                ? ((F.prefinished = !0), j.emit("prefinish"))
                : (F.pendingcb++,
                  (F.finalCalled = !0),
                  process.nextTick(ee, j, F)));
          })(j, F),
          0 === F.pendingcb &&
            ((F.finished = !0), j.emit("finish"), F.autoDestroy))
        ) {
          var N = j._readableState;
          (!N || (N.autoDestroy && N.endEmitted)) && j.destroy();
        }
        return A;
      }
      d(6698)($, h),
        (k.prototype.getBuffer = function () {
          for (var F = this.bufferedRequest, A = []; F; )
            A.push(F), (F = F.next);
          return A;
        }),
        (function () {
          try {
            Object.defineProperty(k.prototype, "buffer", {
              get: f.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((x = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty($, Symbol.hasInstance, {
              value: function (F) {
                return (
                  !!x.call(this, F) ||
                  (this === $ && F && F._writableState instanceof k)
                );
              },
            }))
          : (x = function (F) {
              return F instanceof this;
            }),
        ($.prototype.pipe = function () {
          S(this, new _());
        }),
        ($.prototype.write = function (j, F, A) {
          var N = this._writableState,
            D = !1,
            C =
              !N.objectMode &&
              (function l(j) {
                return t.isBuffer(j) || j instanceof i;
              })(j);
          return (
            C &&
              !t.isBuffer(j) &&
              (j = (function o(j) {
                return t.from(j);
              })(j)),
            "function" == typeof F && ((A = F), (F = null)),
            C ? (F = "buffer") : F || (F = N.defaultEncoding),
            "function" != typeof A && (A = T),
            N.ending
              ? (function G(j, F) {
                  var A = new E();
                  S(j, A), process.nextTick(F, A);
                })(this, A)
              : (C ||
                  (function re(j, F, A, N) {
                    var D;
                    return (
                      null === A
                        ? (D = new b())
                        : "string" != typeof A &&
                          !F.objectMode &&
                          (D = new a("chunk", ["string", "Buffer"], A)),
                      !D || (S(j, D), process.nextTick(N, D), !1)
                    );
                  })(this, N, j, A)) &&
                (N.pendingcb++,
                (D = (function Y(j, F, A, N, D, C) {
                  if (!A) {
                    var R = (function le(j, F, A) {
                      return (
                        !j.objectMode &&
                          !1 !== j.decodeStrings &&
                          "string" == typeof F &&
                          (F = t.from(F, A)),
                        F
                      );
                    })(F, N, D);
                    N !== R && ((A = !0), (D = "buffer"), (N = R));
                  }
                  var L = F.objectMode ? 1 : N.length;
                  F.length += L;
                  var J = F.length < F.highWaterMark;
                  if ((J || (F.needDrain = !0), F.writing || F.corked)) {
                    var se = F.lastBufferedRequest;
                    (F.lastBufferedRequest = {
                      chunk: N,
                      encoding: D,
                      isBuf: A,
                      callback: C,
                      next: null,
                    }),
                      se
                        ? (se.next = F.lastBufferedRequest)
                        : (F.bufferedRequest = F.lastBufferedRequest),
                      (F.bufferedRequestCount += 1);
                  } else Q(j, F, !1, L, N, D, C);
                  return J;
                })(this, N, C, j, F, A))),
            D
          );
        }),
        ($.prototype.cork = function () {
          this._writableState.corked++;
        }),
        ($.prototype.uncork = function () {
          var j = this._writableState;
          j.corked &&
            (j.corked--,
            !j.writing &&
              !j.corked &&
              !j.bufferProcessing &&
              j.bufferedRequest &&
              W(this, j));
        }),
        ($.prototype.setDefaultEncoding = function (F) {
          if (
            ("string" == typeof F && (F = F.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((F + "").toLowerCase()) > -1
            ))
          )
            throw new w(F);
          return (this._writableState.defaultEncoding = F), this;
        }),
        Object.defineProperty($.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty($.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        ($.prototype._write = function (j, F, A) {
          A(new g("_write()"));
        }),
        ($.prototype._writev = null),
        ($.prototype.end = function (j, F, A) {
          var N = this._writableState;
          return (
            "function" == typeof j
              ? ((A = j), (j = null), (F = null))
              : "function" == typeof F && ((A = F), (F = null)),
            null != j && this.write(j, F),
            N.corked && ((N.corked = 1), this.uncork()),
            N.ending ||
              (function ce(j, F, A) {
                (F.ending = !0),
                  ue(j, F),
                  A && (F.finished ? process.nextTick(A) : j.once("finish", A)),
                  (F.ended = !0),
                  (j.writable = !1);
              })(this, N, A),
            this
          );
        }),
        Object.defineProperty($.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty($.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (F) {
            this._writableState && (this._writableState.destroyed = F);
          },
        }),
        ($.prototype.destroy = c.destroy),
        ($.prototype._undestroy = c.undestroy),
        ($.prototype._destroy = function (j, F) {
          F(j);
        });
    },
    457: (I, s, d) => {
      "use strict";
      var e;
      function m(E, w, S) {
        return (
          (w = (function u(E) {
            var w = (function f(E, w) {
              if ("object" != typeof E || null === E) return E;
              var S = E[Symbol.toPrimitive];
              if (void 0 !== S) {
                var T = S.call(E, w || "default");
                if ("object" != typeof T) return T;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === w ? String : Number)(E);
            })(E, "string");
            return "symbol" == typeof w ? w : String(w);
          })(w)),
          w in E
            ? Object.defineProperty(E, w, {
                value: S,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (E[w] = S),
          E
        );
      }
      var h = d(4618),
        t = Symbol("lastResolve"),
        i = Symbol("lastReject"),
        o = Symbol("error"),
        l = Symbol("ended"),
        c = Symbol("lastPromise"),
        p = Symbol("handlePromise"),
        r = Symbol("stream");
      function n(E, w) {
        return { value: E, done: w };
      }
      function a(E) {
        var w = E[t];
        if (null !== w) {
          var S = E[r].read();
          null !== S &&
            ((E[c] = null), (E[t] = null), (E[i] = null), w(n(S, !1)));
        }
      }
      function g(E) {
        process.nextTick(a, E);
      }
      var _ = Object.getPrototypeOf(function () {}),
        v = Object.setPrototypeOf(
          (m(
            (e = {
              get stream() {
                return this[r];
              },
              next: function () {
                var w = this,
                  S = this[o];
                if (null !== S) return Promise.reject(S);
                if (this[l]) return Promise.resolve(n(void 0, !0));
                if (this[r].destroyed)
                  return new Promise(function ($, G) {
                    process.nextTick(function () {
                      w[o] ? G(w[o]) : $(n(void 0, !0));
                    });
                  });
                var k,
                  T = this[c];
                if (T)
                  k = new Promise(
                    (function y(E, w) {
                      return function (S, T) {
                        E.then(function () {
                          w[l] ? S(n(void 0, !0)) : w[p](S, T);
                        }, T);
                      };
                    })(T, this)
                  );
                else {
                  var x = this[r].read();
                  if (null !== x) return Promise.resolve(n(x, !1));
                  k = new Promise(this[p]);
                }
                return (this[c] = k), k;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          m(e, "return", function () {
            var w = this;
            return new Promise(function (S, T) {
              w[r].destroy(null, function (k) {
                k ? T(k) : S(n(void 0, !0));
              });
            });
          }),
          e),
          _
        );
      I.exports = function (w) {
        var S,
          T = Object.create(
            v,
            (m((S = {}), r, { value: w, writable: !0 }),
            m(S, t, { value: null, writable: !0 }),
            m(S, i, { value: null, writable: !0 }),
            m(S, o, { value: null, writable: !0 }),
            m(S, l, { value: w._readableState.endEmitted, writable: !0 }),
            m(S, p, {
              value: function (x, $) {
                var G = T[r].read();
                G
                  ? ((T[c] = null), (T[t] = null), (T[i] = null), x(n(G, !1)))
                  : ((T[t] = x), (T[i] = $));
              },
              writable: !0,
            }),
            S)
          );
        return (
          (T[c] = null),
          h(w, function (k) {
            if (k && "ERR_STREAM_PREMATURE_CLOSE" !== k.code) {
              var x = T[i];
              return (
                null !== x &&
                  ((T[c] = null), (T[t] = null), (T[i] = null), x(k)),
                void (T[o] = k)
              );
            }
            var $ = T[t];
            null !== $ &&
              ((T[c] = null), (T[t] = null), (T[i] = null), $(n(void 0, !0))),
              (T[l] = !0);
          }),
          w.on("readable", g.bind(null, T)),
          T
        );
      };
    },
    2960: (I, s, d) => {
      "use strict";
      function e(g, y) {
        var _ = Object.keys(g);
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(g);
          y &&
            (v = v.filter(function (b) {
              return Object.getOwnPropertyDescriptor(g, b).enumerable;
            })),
            _.push.apply(_, v);
        }
        return _;
      }
      function m(g) {
        for (var y = 1; y < arguments.length; y++) {
          var _ = null != arguments[y] ? arguments[y] : {};
          y % 2
            ? e(Object(_), !0).forEach(function (v) {
                u(g, v, _[v]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(_))
            : e(Object(_)).forEach(function (v) {
                Object.defineProperty(
                  g,
                  v,
                  Object.getOwnPropertyDescriptor(_, v)
                );
              });
        }
        return g;
      }
      function u(g, y, _) {
        return (
          (y = i(y)) in g
            ? Object.defineProperty(g, y, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (g[y] = _),
          g
        );
      }
      function h(g, y) {
        for (var _ = 0; _ < y.length; _++) {
          var v = y[_];
          (v.enumerable = v.enumerable || !1),
            (v.configurable = !0),
            "value" in v && (v.writable = !0),
            Object.defineProperty(g, i(v.key), v);
        }
      }
      function i(g) {
        var y = (function o(g, y) {
          if ("object" != typeof g || null === g) return g;
          var _ = g[Symbol.toPrimitive];
          if (void 0 !== _) {
            var v = _.call(g, y || "default");
            if ("object" != typeof v) return v;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === y ? String : Number)(g);
        })(g, "string");
        return "symbol" == typeof y ? y : String(y);
      }
      var c = d(9007).Buffer,
        r = d(2361).inspect,
        n = (r && r.custom) || "inspect";
      function a(g, y, _) {
        c.prototype.copy.call(g, y, _);
      }
      I.exports = (function () {
        function g() {
          (function f(g, y) {
            if (!(g instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, g),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (function t(g, y, _) {
            y && h(g.prototype, y),
              _ && h(g, _),
              Object.defineProperty(g, "prototype", { writable: !1 });
          })(g, [
            {
              key: "push",
              value: function (_) {
                var v = { data: _, next: null };
                this.length > 0 ? (this.tail.next = v) : (this.head = v),
                  (this.tail = v),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (_) {
                var v = { data: _, next: this.head };
                0 === this.length && (this.tail = v),
                  (this.head = v),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var _ = this.head.data;
                  return (
                    (this.head =
                      1 === this.length ? (this.tail = null) : this.head.next),
                    --this.length,
                    _
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (_) {
                if (0 === this.length) return "";
                for (var v = this.head, b = "" + v.data; (v = v.next); )
                  b += _ + v.data;
                return b;
              },
            },
            {
              key: "concat",
              value: function (_) {
                if (0 === this.length) return c.alloc(0);
                for (var v = c.allocUnsafe(_ >>> 0), b = this.head, E = 0; b; )
                  a(b.data, v, E), (E += b.data.length), (b = b.next);
                return v;
              },
            },
            {
              key: "consume",
              value: function (_, v) {
                var b;
                return (
                  _ < this.head.data.length
                    ? ((b = this.head.data.slice(0, _)),
                      (this.head.data = this.head.data.slice(_)))
                    : (b =
                        _ === this.head.data.length
                          ? this.shift()
                          : v
                          ? this._getString(_)
                          : this._getBuffer(_)),
                  b
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (_) {
                var v = this.head,
                  b = 1,
                  E = v.data;
                for (_ -= E.length; (v = v.next); ) {
                  var w = v.data,
                    S = _ > w.length ? w.length : _;
                  if (
                    ((E += S === w.length ? w : w.slice(0, _)), 0 == (_ -= S))
                  ) {
                    S === w.length
                      ? (++b,
                        (this.head = v.next ? v.next : (this.tail = null)))
                      : ((this.head = v), (v.data = w.slice(S)));
                    break;
                  }
                  ++b;
                }
                return (this.length -= b), E;
              },
            },
            {
              key: "_getBuffer",
              value: function (_) {
                var v = c.allocUnsafe(_),
                  b = this.head,
                  E = 1;
                for (b.data.copy(v), _ -= b.data.length; (b = b.next); ) {
                  var w = b.data,
                    S = _ > w.length ? w.length : _;
                  if ((w.copy(v, v.length - _, 0, S), 0 == (_ -= S))) {
                    S === w.length
                      ? (++E,
                        (this.head = b.next ? b.next : (this.tail = null)))
                      : ((this.head = b), (b.data = w.slice(S)));
                    break;
                  }
                  ++E;
                }
                return (this.length -= E), v;
              },
            },
            {
              key: n,
              value: function (_, v) {
                return r(
                  this,
                  m(m({}, v), {}, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]),
          g
        );
      })();
    },
    5601: (I) => {
      "use strict";
      function d(h, t) {
        u(h, t), e(h);
      }
      function e(h) {
        (h._writableState && !h._writableState.emitClose) ||
          (h._readableState && !h._readableState.emitClose) ||
          h.emit("close");
      }
      function u(h, t) {
        h.emit("error", t);
      }
      I.exports = {
        destroy: function s(h, t) {
          var i = this;
          return (this._readableState && this._readableState.destroyed) ||
            (this._writableState && this._writableState.destroyed)
            ? (t
                ? t(h)
                : h &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      process.nextTick(u, this, h))
                    : process.nextTick(u, this, h)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(h || null, function (c) {
                !t && c
                  ? i._writableState
                    ? i._writableState.errorEmitted
                      ? process.nextTick(e, i)
                      : ((i._writableState.errorEmitted = !0),
                        process.nextTick(d, i, c))
                    : process.nextTick(d, i, c)
                  : t
                  ? (process.nextTick(e, i), t(c))
                  : process.nextTick(e, i);
              }),
              this);
        },
        undestroy: function m() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function f(h, t) {
          var i = h._readableState,
            o = h._writableState;
          (i && i.autoDestroy) || (o && o.autoDestroy)
            ? h.destroy(t)
            : h.emit("error", t);
        },
      };
    },
    4618: (I, s, d) => {
      "use strict";
      var e = d(7218).q.ERR_STREAM_PREMATURE_CLOSE;
      function u() {}
      I.exports = function h(t, i, o) {
        if ("function" == typeof i) return h(t, null, i);
        i || (i = {}),
          (o = (function m(t) {
            var i = !1;
            return function () {
              if (!i) {
                i = !0;
                for (
                  var o = arguments.length, l = new Array(o), c = 0;
                  c < o;
                  c++
                )
                  l[c] = arguments[c];
                t.apply(this, l);
              }
            };
          })(o || u));
        var l = i.readable || (!1 !== i.readable && t.readable),
          c = i.writable || (!1 !== i.writable && t.writable),
          p = function () {
            t.writable || n();
          },
          r = t._writableState && t._writableState.finished,
          n = function () {
            (c = !1), (r = !0), l || o.call(t);
          },
          a = t._readableState && t._readableState.endEmitted,
          g = function () {
            (l = !1), (a = !0), c || o.call(t);
          },
          y = function (E) {
            o.call(t, E);
          },
          _ = function () {
            var E;
            return l && !a
              ? ((!t._readableState || !t._readableState.ended) &&
                  (E = new e()),
                o.call(t, E))
              : c && !r
              ? ((!t._writableState || !t._writableState.ended) &&
                  (E = new e()),
                o.call(t, E))
              : void 0;
          },
          v = function () {
            t.req.on("finish", n);
          };
        return (
          (function f(t) {
            return t.setHeader && "function" == typeof t.abort;
          })(t)
            ? (t.on("complete", n),
              t.on("abort", _),
              t.req ? v() : t.on("request", v))
            : c && !t._writableState && (t.on("end", p), t.on("close", p)),
          t.on("end", g),
          t.on("finish", n),
          !1 !== i.error && t.on("error", y),
          t.on("close", _),
          function () {
            t.removeListener("complete", n),
              t.removeListener("abort", _),
              t.removeListener("request", v),
              t.req && t.req.removeListener("finish", n),
              t.removeListener("end", p),
              t.removeListener("close", p),
              t.removeListener("finish", n),
              t.removeListener("end", g),
              t.removeListener("error", y),
              t.removeListener("close", _);
          }
        );
      };
    },
    3335: (I) => {
      I.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    4514: (I, s, d) => {
      "use strict";
      var e,
        u = d(7218).q,
        f = u.ERR_MISSING_ARGS,
        h = u.ERR_STREAM_DESTROYED;
      function t(n) {
        if (n) throw n;
      }
      function l(n) {
        n();
      }
      function c(n, a) {
        return n.pipe(a);
      }
      I.exports = function r() {
        for (var n = arguments.length, a = new Array(n), g = 0; g < n; g++)
          a[g] = arguments[g];
        var y = (function p(n) {
          return n.length && "function" == typeof n[n.length - 1] ? n.pop() : t;
        })(a);
        if ((Array.isArray(a[0]) && (a = a[0]), a.length < 2))
          throw new f("streams");
        var _,
          v = a.map(function (b, E) {
            var w = E < a.length - 1;
            return (function o(n, a, g, y) {
              y = (function m(n) {
                var a = !1;
                return function () {
                  a || ((a = !0), n.apply(void 0, arguments));
                };
              })(y);
              var _ = !1;
              n.on("close", function () {
                _ = !0;
              }),
                void 0 === e && (e = d(4618)),
                e(n, { readable: a, writable: g }, function (b) {
                  if (b) return y(b);
                  (_ = !0), y();
                });
              var v = !1;
              return function (b) {
                if (!_ && !v) {
                  if (
                    ((v = !0),
                    (function i(n) {
                      return n.setHeader && "function" == typeof n.abort;
                    })(n))
                  )
                    return n.abort();
                  if ("function" == typeof n.destroy) return n.destroy();
                  y(b || new h("pipe"));
                }
              };
            })(b, w, E > 0, function (T) {
              _ || (_ = T), T && v.forEach(l), !w && (v.forEach(l), y(_));
            });
          });
        return a.reduce(c);
      };
    },
    8782: (I, s, d) => {
      "use strict";
      var e = d(7218).q.ERR_INVALID_OPT_VALUE;
      I.exports = {
        getHighWaterMark: function u(f, h, t, i) {
          var o = (function m(f, h, t) {
            return null != f.highWaterMark ? f.highWaterMark : h ? f[t] : null;
          })(h, i, t);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new e(i ? t : "highWaterMark", o);
            return Math.floor(o);
          }
          return f.objectMode ? 16 : 16384;
        },
      };
    },
    8240: (I, s, d) => {
      I.exports = d(2016).EventEmitter;
    },
    6745: (I, s, d) => {
      ((s = I.exports = d(309)).Stream = s),
        (s.Readable = s),
        (s.Writable = d(6563)),
        (s.Duplex = d(247)),
        (s.Transform = d(6307)),
        (s.PassThrough = d(5096)),
        (s.finished = d(4618)),
        (s.pipeline = d(4514));
    },
    1858: (I, s, d) => {
      const e = Symbol("SemVer ANY");
      class m {
        static get ANY() {
          return e;
        }
        constructor(p, r) {
          if (((r = u(r)), p instanceof m)) {
            if (p.loose === !!r.loose) return p;
            p = p.value;
          }
          (p = p.trim().split(/\s+/).join(" ")),
            i("comparator", p, r),
            (this.options = r),
            (this.loose = !!r.loose),
            this.parse(p),
            (this.value =
              this.semver === e ? "" : this.operator + this.semver.version),
            i("comp", this);
        }
        parse(p) {
          const n = p.match(
            this.options.loose ? f[h.COMPARATORLOOSE] : f[h.COMPARATOR]
          );
          if (!n) throw new TypeError(`Invalid comparator: ${p}`);
          (this.operator = void 0 !== n[1] ? n[1] : ""),
            "=" === this.operator && (this.operator = ""),
            (this.semver = n[2] ? new o(n[2], this.options.loose) : e);
        }
        toString() {
          return this.value;
        }
        test(p) {
          if (
            (i("Comparator.test", p, this.options.loose),
            this.semver === e || p === e)
          )
            return !0;
          if ("string" == typeof p)
            try {
              p = new o(p, this.options);
            } catch {
              return !1;
            }
          return t(p, this.operator, this.semver, this.options);
        }
        intersects(p, r) {
          if (!(p instanceof m))
            throw new TypeError("a Comparator is required");
          return "" === this.operator
            ? "" === this.value || new l(p.value, r).test(this.value)
            : "" === p.operator
            ? "" === p.value || new l(this.value, r).test(p.semver)
            : !(
                ((r = u(r)).includePrerelease &&
                  ("<0.0.0-0" === this.value || "<0.0.0-0" === p.value)) ||
                (!r.includePrerelease &&
                  (this.value.startsWith("<0.0.0") ||
                    p.value.startsWith("<0.0.0"))) ||
                !(
                  (this.operator.startsWith(">") &&
                    p.operator.startsWith(">")) ||
                  (this.operator.startsWith("<") &&
                    p.operator.startsWith("<")) ||
                  (this.semver.version === p.semver.version &&
                    this.operator.includes("=") &&
                    p.operator.includes("=")) ||
                  (t(this.semver, "<", p.semver, r) &&
                    this.operator.startsWith(">") &&
                    p.operator.startsWith("<")) ||
                  (t(this.semver, ">", p.semver, r) &&
                    this.operator.startsWith("<") &&
                    p.operator.startsWith(">"))
                )
              );
        }
      }
      I.exports = m;
      const u = d(3367),
        { safeRe: f, t: h } = d(5808),
        t = d(269),
        i = d(4859),
        o = d(1003),
        l = d(2441);
    },
    2441: (I, s, d) => {
      class e {
        constructor(Q, X) {
          if (((X = f(X)), Q instanceof e))
            return Q.loose === !!X.loose &&
              Q.includePrerelease === !!X.includePrerelease
              ? Q
              : new e(Q.raw, X);
          if (Q instanceof h)
            return (
              (this.raw = Q.value), (this.set = [[Q]]), this.format(), this
            );
          if (
            ((this.options = X),
            (this.loose = !!X.loose),
            (this.includePrerelease = !!X.includePrerelease),
            (this.raw = Q.trim().split(/\s+/).join(" ")),
            (this.set = this.raw
              .split("||")
              .map((B) => this.parseRange(B.trim()))
              .filter((B) => B.length)),
            !this.set.length)
          )
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
          if (this.set.length > 1) {
            const B = this.set[0];
            if (
              ((this.set = this.set.filter((z) => !g(z[0]))),
              0 === this.set.length)
            )
              this.set = [B];
            else if (this.set.length > 1)
              for (const z of this.set)
                if (1 === z.length && y(z[0])) {
                  this.set = [z];
                  break;
                }
          }
          this.format();
        }
        format() {
          return (
            (this.range = this.set
              .map((Q) => Q.join(" ").trim())
              .join("||")
              .trim()),
            this.range
          );
        }
        toString() {
          return this.range;
        }
        parseRange(Q) {
          const B =
              ((this.options.includePrerelease && n) |
                (this.options.loose && a)) +
              ":" +
              Q,
            z = u.get(B);
          if (z) return z;
          const K = this.options.loose;
          (Q = Q.replace(
            K ? o[l.HYPHENRANGELOOSE] : o[l.HYPHENRANGE],
            re(this.options.includePrerelease)
          )),
            t("hyphen replace", Q),
            (Q = Q.replace(o[l.COMPARATORTRIM], c)),
            t("comparator trim", Q),
            (Q = Q.replace(o[l.TILDETRIM], p)),
            t("tilde trim", Q),
            (Q = Q.replace(o[l.CARETTRIM], r)),
            t("caret trim", Q);
          let W = Q.split(" ")
            .map((ue) => v(ue, this.options))
            .join(" ")
            .split(/\s+/)
            .map((ue) => G(ue, this.options));
          K &&
            (W = W.filter(
              (ue) => (
                t("loose invalid filter", ue, this.options),
                !!ue.match(o[l.COMPARATORLOOSE])
              )
            )),
            t("range list", W);
          const V = new Map(),
            ee = W.map((ue) => new h(ue, this.options));
          for (const ue of ee) {
            if (g(ue)) return [ue];
            V.set(ue.value, ue);
          }
          V.size > 1 && V.has("") && V.delete("");
          const ie = [...V.values()];
          return u.set(B, ie), ie;
        }
        intersects(Q, X) {
          if (!(Q instanceof e)) throw new TypeError("a Range is required");
          return this.set.some(
            (B) =>
              _(B, X) &&
              Q.set.some(
                (z) =>
                  _(z, X) && B.every((K) => z.every((H) => K.intersects(H, X)))
              )
          );
        }
        test(Q) {
          if (!Q) return !1;
          if ("string" == typeof Q)
            try {
              Q = new i(Q, this.options);
            } catch {
              return !1;
            }
          for (let X = 0; X < this.set.length; X++)
            if (le(this.set[X], Q, this.options)) return !0;
          return !1;
        }
      }
      I.exports = e;
      const u = new (d(3756))({ max: 1e3 }),
        f = d(3367),
        h = d(1858),
        t = d(4859),
        i = d(1003),
        {
          safeRe: o,
          t: l,
          comparatorTrimReplace: c,
          tildeTrimReplace: p,
          caretTrimReplace: r,
        } = d(5808),
        { FLAG_INCLUDE_PRERELEASE: n, FLAG_LOOSE: a } = d(610),
        g = (Y) => "<0.0.0-0" === Y.value,
        y = (Y) => "" === Y.value,
        _ = (Y, Q) => {
          let X = !0;
          const B = Y.slice();
          let z = B.pop();
          for (; X && B.length; )
            (X = B.every((K) => z.intersects(K, Q))), (z = B.pop());
          return X;
        },
        v = (Y, Q) => (
          t("comp", Y, Q),
          (Y = S(Y, Q)),
          t("caret", Y),
          (Y = E(Y, Q)),
          t("tildes", Y),
          (Y = k(Y, Q)),
          t("xrange", Y),
          (Y = $(Y, Q)),
          t("stars", Y),
          Y
        ),
        b = (Y) => !Y || "x" === Y.toLowerCase() || "*" === Y,
        E = (Y, Q) =>
          Y.trim()
            .split(/\s+/)
            .map((X) => w(X, Q))
            .join(" "),
        w = (Y, Q) =>
          Y.replace(Q.loose ? o[l.TILDELOOSE] : o[l.TILDE], (B, z, K, H, W) => {
            let V;
            return (
              t("tilde", Y, B, z, K, H, W),
              b(z)
                ? (V = "")
                : b(K)
                ? (V = `>=${z}.0.0 <${+z + 1}.0.0-0`)
                : b(H)
                ? (V = `>=${z}.${K}.0 <${z}.${+K + 1}.0-0`)
                : W
                ? (t("replaceTilde pr", W),
                  (V = `>=${z}.${K}.${H}-${W} <${z}.${+K + 1}.0-0`))
                : (V = `>=${z}.${K}.${H} <${z}.${+K + 1}.0-0`),
              t("tilde return", V),
              V
            );
          }),
        S = (Y, Q) =>
          Y.trim()
            .split(/\s+/)
            .map((X) => T(X, Q))
            .join(" "),
        T = (Y, Q) => {
          t("caret", Y, Q);
          const B = Q.includePrerelease ? "-0" : "";
          return Y.replace(
            Q.loose ? o[l.CARETLOOSE] : o[l.CARET],
            (z, K, H, W, V) => {
              let ee;
              return (
                t("caret", Y, z, K, H, W, V),
                b(K)
                  ? (ee = "")
                  : b(H)
                  ? (ee = `>=${K}.0.0${B} <${+K + 1}.0.0-0`)
                  : b(W)
                  ? (ee =
                      "0" === K
                        ? `>=${K}.${H}.0${B} <${K}.${+H + 1}.0-0`
                        : `>=${K}.${H}.0${B} <${+K + 1}.0.0-0`)
                  : V
                  ? (t("replaceCaret pr", V),
                    (ee =
                      "0" === K
                        ? "0" === H
                          ? `>=${K}.${H}.${W}-${V} <${K}.${H}.${+W + 1}-0`
                          : `>=${K}.${H}.${W}-${V} <${K}.${+H + 1}.0-0`
                        : `>=${K}.${H}.${W}-${V} <${+K + 1}.0.0-0`))
                  : (t("no pr"),
                    (ee =
                      "0" === K
                        ? "0" === H
                          ? `>=${K}.${H}.${W}${B} <${K}.${H}.${+W + 1}-0`
                          : `>=${K}.${H}.${W}${B} <${K}.${+H + 1}.0-0`
                        : `>=${K}.${H}.${W} <${+K + 1}.0.0-0`)),
                t("caret return", ee),
                ee
              );
            }
          );
        },
        k = (Y, Q) => (
          t("replaceXRanges", Y, Q),
          Y.split(/\s+/)
            .map((X) => x(X, Q))
            .join(" ")
        ),
        x = (Y, Q) =>
          (Y = Y.trim()).replace(
            Q.loose ? o[l.XRANGELOOSE] : o[l.XRANGE],
            (B, z, K, H, W, V) => {
              t("xRange", Y, B, z, K, H, W, V);
              const ee = b(K),
                ie = ee || b(H),
                ue = ie || b(W);
              return (
                "=" === z && ue && (z = ""),
                (V = Q.includePrerelease ? "-0" : ""),
                ee
                  ? (B = ">" === z || "<" === z ? "<0.0.0-0" : "*")
                  : z && ue
                  ? (ie && (H = 0),
                    (W = 0),
                    ">" === z
                      ? ((z = ">="),
                        ie
                          ? ((K = +K + 1), (H = 0), (W = 0))
                          : ((H = +H + 1), (W = 0)))
                      : "<=" === z &&
                        ((z = "<"), ie ? (K = +K + 1) : (H = +H + 1)),
                    "<" === z && (V = "-0"),
                    (B = `${z + K}.${H}.${W}${V}`))
                  : ie
                  ? (B = `>=${K}.0.0${V} <${+K + 1}.0.0-0`)
                  : ue && (B = `>=${K}.${H}.0${V} <${K}.${+H + 1}.0-0`),
                t("xRange return", B),
                B
              );
            }
          ),
        $ = (Y, Q) => (
          t("replaceStars", Y, Q), Y.trim().replace(o[l.STAR], "")
        ),
        G = (Y, Q) => (
          t("replaceGTE0", Y, Q),
          Y.trim().replace(o[Q.includePrerelease ? l.GTE0PRE : l.GTE0], "")
        ),
        re = (Y) => (Q, X, B, z, K, H, W, V, ee, ie, ue, ce, de) =>
          `${(X = b(B)
            ? ""
            : b(z)
            ? `>=${B}.0.0${Y ? "-0" : ""}`
            : b(K)
            ? `>=${B}.${z}.0${Y ? "-0" : ""}`
            : H
            ? `>=${X}`
            : `>=${X}${Y ? "-0" : ""}`)} ${(V = b(ee)
            ? ""
            : b(ie)
            ? `<${+ee + 1}.0.0-0`
            : b(ue)
            ? `<${ee}.${+ie + 1}.0-0`
            : ce
            ? `<=${ee}.${ie}.${ue}-${ce}`
            : Y
            ? `<${ee}.${ie}.${+ue + 1}-0`
            : `<=${V}`)}`.trim(),
        le = (Y, Q, X) => {
          for (let B = 0; B < Y.length; B++) if (!Y[B].test(Q)) return !1;
          if (Q.prerelease.length && !X.includePrerelease) {
            for (let B = 0; B < Y.length; B++)
              if (
                (t(Y[B].semver),
                Y[B].semver !== h.ANY && Y[B].semver.prerelease.length > 0)
              ) {
                const z = Y[B].semver;
                if (
                  z.major === Q.major &&
                  z.minor === Q.minor &&
                  z.patch === Q.patch
                )
                  return !0;
              }
            return !1;
          }
          return !0;
        };
    },
    1003: (I, s, d) => {
      const e = d(4859),
        { MAX_LENGTH: m, MAX_SAFE_INTEGER: u } = d(610),
        { safeRe: f, t: h } = d(5808),
        t = d(3367),
        { compareIdentifiers: i } = d(709);
      class o {
        constructor(c, p) {
          if (((p = t(p)), c instanceof o)) {
            if (
              c.loose === !!p.loose &&
              c.includePrerelease === !!p.includePrerelease
            )
              return c;
            c = c.version;
          } else if ("string" != typeof c)
            throw new TypeError(
              `Invalid version. Must be a string. Got type "${typeof c}".`
            );
          if (c.length > m)
            throw new TypeError(`version is longer than ${m} characters`);
          e("SemVer", c, p),
            (this.options = p),
            (this.loose = !!p.loose),
            (this.includePrerelease = !!p.includePrerelease);
          const r = c.trim().match(p.loose ? f[h.LOOSE] : f[h.FULL]);
          if (!r) throw new TypeError(`Invalid Version: ${c}`);
          if (
            ((this.raw = c),
            (this.major = +r[1]),
            (this.minor = +r[2]),
            (this.patch = +r[3]),
            this.major > u || this.major < 0)
          )
            throw new TypeError("Invalid major version");
          if (this.minor > u || this.minor < 0)
            throw new TypeError("Invalid minor version");
          if (this.patch > u || this.patch < 0)
            throw new TypeError("Invalid patch version");
          (this.prerelease = r[4]
            ? r[4].split(".").map((n) => {
                if (/^[0-9]+$/.test(n)) {
                  const a = +n;
                  if (a >= 0 && a < u) return a;
                }
                return n;
              })
            : []),
            (this.build = r[5] ? r[5].split(".") : []),
            this.format();
        }
        format() {
          return (
            (this.version = `${this.major}.${this.minor}.${this.patch}`),
            this.prerelease.length &&
              (this.version += `-${this.prerelease.join(".")}`),
            this.version
          );
        }
        toString() {
          return this.version;
        }
        compare(c) {
          if (
            (e("SemVer.compare", this.version, this.options, c),
            !(c instanceof o))
          ) {
            if ("string" == typeof c && c === this.version) return 0;
            c = new o(c, this.options);
          }
          return c.version === this.version
            ? 0
            : this.compareMain(c) || this.comparePre(c);
        }
        compareMain(c) {
          return (
            c instanceof o || (c = new o(c, this.options)),
            i(this.major, c.major) ||
              i(this.minor, c.minor) ||
              i(this.patch, c.patch)
          );
        }
        comparePre(c) {
          if (
            (c instanceof o || (c = new o(c, this.options)),
            this.prerelease.length && !c.prerelease.length)
          )
            return -1;
          if (!this.prerelease.length && c.prerelease.length) return 1;
          if (!this.prerelease.length && !c.prerelease.length) return 0;
          let p = 0;
          do {
            const r = this.prerelease[p],
              n = c.prerelease[p];
            if (
              (e("prerelease compare", p, r, n), void 0 === r && void 0 === n)
            )
              return 0;
            if (void 0 === n) return 1;
            if (void 0 === r) return -1;
            if (r !== n) return i(r, n);
          } while (++p);
        }
        compareBuild(c) {
          c instanceof o || (c = new o(c, this.options));
          let p = 0;
          do {
            const r = this.build[p],
              n = c.build[p];
            if (
              (e("prerelease compare", p, r, n), void 0 === r && void 0 === n)
            )
              return 0;
            if (void 0 === n) return 1;
            if (void 0 === r) return -1;
            if (r !== n) return i(r, n);
          } while (++p);
        }
        inc(c, p, r) {
          switch (c) {
            case "premajor":
              (this.prerelease.length = 0),
                (this.patch = 0),
                (this.minor = 0),
                this.major++,
                this.inc("pre", p, r);
              break;
            case "preminor":
              (this.prerelease.length = 0),
                (this.patch = 0),
                this.minor++,
                this.inc("pre", p, r);
              break;
            case "prepatch":
              (this.prerelease.length = 0),
                this.inc("patch", p, r),
                this.inc("pre", p, r);
              break;
            case "prerelease":
              0 === this.prerelease.length && this.inc("patch", p, r),
                this.inc("pre", p, r);
              break;
            case "major":
              (0 !== this.minor ||
                0 !== this.patch ||
                0 === this.prerelease.length) &&
                this.major++,
                (this.minor = 0),
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case "minor":
              (0 !== this.patch || 0 === this.prerelease.length) &&
                this.minor++,
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case "patch":
              0 === this.prerelease.length && this.patch++,
                (this.prerelease = []);
              break;
            case "pre": {
              const n = Number(r) ? 1 : 0;
              if (!p && !1 === r)
                throw new Error(
                  "invalid increment argument: identifier is empty"
                );
              if (0 === this.prerelease.length) this.prerelease = [n];
              else {
                let a = this.prerelease.length;
                for (; --a >= 0; )
                  "number" == typeof this.prerelease[a] &&
                    (this.prerelease[a]++, (a = -2));
                if (-1 === a) {
                  if (p === this.prerelease.join(".") && !1 === r)
                    throw new Error(
                      "invalid increment argument: identifier already exists"
                    );
                  this.prerelease.push(n);
                }
              }
              if (p) {
                let a = [p, n];
                !1 === r && (a = [p]),
                  0 === i(this.prerelease[0], p)
                    ? isNaN(this.prerelease[1]) && (this.prerelease = a)
                    : (this.prerelease = a);
              }
              break;
            }
            default:
              throw new Error(`invalid increment argument: ${c}`);
          }
          return (
            (this.raw = this.format()),
            this.build.length && (this.raw += `+${this.build.join(".")}`),
            this
          );
        }
      }
      I.exports = o;
    },
    7521: (I, s, d) => {
      const e = d(9247);
      I.exports = (u, f) => {
        const h = e(u.trim().replace(/^[=v]+/, ""), f);
        return h ? h.version : null;
      };
    },
    269: (I, s, d) => {
      const e = d(9196),
        m = d(6780),
        u = d(6691),
        f = d(4302),
        h = d(2473),
        t = d(9776);
      I.exports = (o, l, c, p) => {
        switch (l) {
          case "===":
            return (
              "object" == typeof o && (o = o.version),
              "object" == typeof c && (c = c.version),
              o === c
            );
          case "!==":
            return (
              "object" == typeof o && (o = o.version),
              "object" == typeof c && (c = c.version),
              o !== c
            );
          case "":
          case "=":
          case "==":
            return e(o, c, p);
          case "!=":
            return m(o, c, p);
          case ">":
            return u(o, c, p);
          case ">=":
            return f(o, c, p);
          case "<":
            return h(o, c, p);
          case "<=":
            return t(o, c, p);
          default:
            throw new TypeError(`Invalid operator: ${l}`);
        }
      };
    },
    4660: (I, s, d) => {
      const e = d(1003),
        m = d(9247),
        { safeRe: u, t: f } = d(5808);
      I.exports = (t, i) => {
        if (t instanceof e) return t;
        if (("number" == typeof t && (t = String(t)), "string" != typeof t))
          return null;
        let o = null;
        if ((i = i || {}).rtl) {
          let l;
          for (
            ;
            (l = u[f.COERCERTL].exec(t)) &&
            (!o || o.index + o[0].length !== t.length);

          )
            (!o || l.index + l[0].length !== o.index + o[0].length) && (o = l),
              (u[f.COERCERTL].lastIndex = l.index + l[1].length + l[2].length);
          u[f.COERCERTL].lastIndex = -1;
        } else o = t.match(u[f.COERCE]);
        return null === o
          ? null
          : m(`${o[2]}.${o[3] || "0"}.${o[4] || "0"}`, i);
      };
    },
    1239: (I, s, d) => {
      const e = d(1003);
      I.exports = (u, f, h) => {
        const t = new e(u, h),
          i = new e(f, h);
        return t.compare(i) || t.compareBuild(i);
      };
    },
    6999: (I, s, d) => {
      const e = d(2214);
      I.exports = (u, f) => e(u, f, !0);
    },
    2214: (I, s, d) => {
      const e = d(1003);
      I.exports = (u, f, h) => new e(u, h).compare(new e(f, h));
    },
    1183: (I, s, d) => {
      const e = d(9247);
      I.exports = (u, f) => {
        const h = e(u, null, !0),
          t = e(f, null, !0),
          i = h.compare(t);
        if (0 === i) return null;
        const o = i > 0,
          l = o ? h : t,
          c = o ? t : h,
          p = !!l.prerelease.length;
        if (c.prerelease.length && !p)
          return c.patch || c.minor
            ? l.patch
              ? "patch"
              : l.minor
              ? "minor"
              : "major"
            : "major";
        const n = p ? "pre" : "";
        return h.major !== t.major
          ? n + "major"
          : h.minor !== t.minor
          ? n + "minor"
          : h.patch !== t.patch
          ? n + "patch"
          : "prerelease";
      };
    },
    9196: (I, s, d) => {
      const e = d(2214);
      I.exports = (u, f, h) => 0 === e(u, f, h);
    },
    6691: (I, s, d) => {
      const e = d(2214);
      I.exports = (u, f, h) => e(u, f, h) > 0;
    },
    4302: (I, s, d) => {
      const e = d(2214);
      I.exports = (u, f, h) => e(u, f, h) >= 0;
    },
    6939: (I, s, d) => {
      const e = d(1003);
      I.exports = (u, f, h, t, i) => {
        "string" == typeof h && ((i = t), (t = h), (h = void 0));
        try {
          return new e(u instanceof e ? u.version : u, h).inc(f, t, i).version;
        } catch {
          return null;
        }
      };
    },
    2473: (I, s, d) => {
      const e = d(2214);
      I.exports = (u, f, h) => e(u, f, h) < 0;
    },
    9776: (I, s, d) => {
      const e = d(2214);
      I.exports = (u, f, h) => e(u, f, h) <= 0;
    },
    2136: (I, s, d) => {
      const e = d(1003);
      I.exports = (u, f) => new e(u, f).major;
    },
    7662: (I, s, d) => {
      const e = d(1003);
      I.exports = (u, f) => new e(u, f).minor;
    },
    6780: (I, s, d) => {
      const e = d(2214);
      I.exports = (u, f, h) => 0 !== e(u, f, h);
    },
    9247: (I, s, d) => {
      const e = d(1003);
      I.exports = (u, f, h = !1) => {
        if (u instanceof e) return u;
        try {
          return new e(u, f);
        } catch (t) {
          if (!h) return null;
          throw t;
        }
      };
    },
    6884: (I, s, d) => {
      const e = d(1003);
      I.exports = (u, f) => new e(u, f).patch;
    },
    8635: (I, s, d) => {
      const e = d(9247);
      I.exports = (u, f) => {
        const h = e(u, f);
        return h && h.prerelease.length ? h.prerelease : null;
      };
    },
    640: (I, s, d) => {
      const e = d(2214);
      I.exports = (u, f, h) => e(f, u, h);
    },
    5876: (I, s, d) => {
      const e = d(1239);
      I.exports = (u, f) => u.sort((h, t) => e(t, h, f));
    },
    7100: (I, s, d) => {
      const e = d(2441);
      I.exports = (u, f, h) => {
        try {
          f = new e(f, h);
        } catch {
          return !1;
        }
        return f.test(u);
      };
    },
    4194: (I, s, d) => {
      const e = d(1239);
      I.exports = (u, f) => u.sort((h, t) => e(h, t, f));
    },
    7676: (I, s, d) => {
      const e = d(9247);
      I.exports = (u, f) => {
        const h = e(u, f);
        return h ? h.version : null;
      };
    },
    424: (I, s, d) => {
      const e = d(5808),
        m = d(610),
        u = d(1003),
        f = d(709),
        h = d(9247),
        t = d(7676),
        i = d(7521),
        o = d(6939),
        l = d(1183),
        c = d(2136),
        p = d(7662),
        r = d(6884),
        n = d(8635),
        a = d(2214),
        g = d(640),
        y = d(6999),
        _ = d(1239),
        v = d(4194),
        b = d(5876),
        E = d(6691),
        w = d(2473),
        S = d(9196),
        T = d(6780),
        k = d(4302),
        x = d(9776),
        $ = d(269),
        G = d(4660),
        re = d(1858),
        le = d(2441),
        Y = d(7100),
        Q = d(1250),
        X = d(2755),
        B = d(1639),
        z = d(4816),
        K = d(2321),
        H = d(7416),
        W = d(562),
        V = d(3013),
        ee = d(4006),
        ie = d(2326),
        ue = d(1538);
      I.exports = {
        parse: h,
        valid: t,
        clean: i,
        inc: o,
        diff: l,
        major: c,
        minor: p,
        patch: r,
        prerelease: n,
        compare: a,
        rcompare: g,
        compareLoose: y,
        compareBuild: _,
        sort: v,
        rsort: b,
        gt: E,
        lt: w,
        eq: S,
        neq: T,
        gte: k,
        lte: x,
        cmp: $,
        coerce: G,
        Comparator: re,
        Range: le,
        satisfies: Y,
        toComparators: Q,
        maxSatisfying: X,
        minSatisfying: B,
        minVersion: z,
        validRange: K,
        outside: H,
        gtr: W,
        ltr: V,
        intersects: ee,
        simplifyRange: ie,
        subset: ue,
        SemVer: u,
        re: e.re,
        src: e.src,
        tokens: e.t,
        SEMVER_SPEC_VERSION: m.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: m.RELEASE_TYPES,
        compareIdentifiers: f.compareIdentifiers,
        rcompareIdentifiers: f.rcompareIdentifiers,
      };
    },
    610: (I) => {
      I.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: 16,
        MAX_SAFE_BUILD_LENGTH: 250,
        MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
        RELEASE_TYPES: [
          "major",
          "premajor",
          "minor",
          "preminor",
          "patch",
          "prepatch",
          "prerelease",
        ],
        SEMVER_SPEC_VERSION: "2.0.0",
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2,
      };
    },
    4859: (I) => {
      const s =
        "object" == typeof process &&
        process.env &&
        process.env.NODE_DEBUG &&
        /\bsemver\b/i.test(process.env.NODE_DEBUG)
          ? (...d) => console.error("SEMVER", ...d)
          : () => {};
      I.exports = s;
    },
    709: (I) => {
      const s = /^[0-9]+$/,
        d = (m, u) => {
          const f = s.test(m),
            h = s.test(u);
          return (
            f && h && ((m = +m), (u = +u)),
            m === u ? 0 : f && !h ? -1 : h && !f ? 1 : m < u ? -1 : 1
          );
        };
      I.exports = {
        compareIdentifiers: d,
        rcompareIdentifiers: (m, u) => d(u, m),
      };
    },
    3367: (I) => {
      const s = Object.freeze({ loose: !0 }),
        d = Object.freeze({});
      I.exports = (m) => (m ? ("object" != typeof m ? s : m) : d);
    },
    5808: (I, s, d) => {
      const {
          MAX_SAFE_COMPONENT_LENGTH: e,
          MAX_SAFE_BUILD_LENGTH: m,
          MAX_LENGTH: u,
        } = d(610),
        f = d(4859),
        h = ((s = I.exports = {}).re = []),
        t = (s.safeRe = []),
        i = (s.src = []),
        o = (s.t = {});
      let l = 0;
      const c = "[a-zA-Z0-9-]",
        p = [
          ["\\s", 1],
          ["\\d", u],
          [c, m],
        ],
        n = (a, g, y) => {
          const _ = ((a) => {
              for (const [g, y] of p)
                a = a
                  .split(`${g}*`)
                  .join(`${g}{0,${y}}`)
                  .split(`${g}+`)
                  .join(`${g}{1,${y}}`);
              return a;
            })(g),
            v = l++;
          f(a, v, g),
            (o[a] = v),
            (i[v] = g),
            (h[v] = new RegExp(g, y ? "g" : void 0)),
            (t[v] = new RegExp(_, y ? "g" : void 0));
        };
      n("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        n("NUMERICIDENTIFIERLOOSE", "\\d+"),
        n("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${c}*`),
        n(
          "MAINVERSION",
          `(${i[o.NUMERICIDENTIFIER]})\\.(${i[o.NUMERICIDENTIFIER]})\\.(${
            i[o.NUMERICIDENTIFIER]
          })`
        ),
        n(
          "MAINVERSIONLOOSE",
          `(${i[o.NUMERICIDENTIFIERLOOSE]})\\.(${
            i[o.NUMERICIDENTIFIERLOOSE]
          })\\.(${i[o.NUMERICIDENTIFIERLOOSE]})`
        ),
        n(
          "PRERELEASEIDENTIFIER",
          `(?:${i[o.NUMERICIDENTIFIER]}|${i[o.NONNUMERICIDENTIFIER]})`
        ),
        n(
          "PRERELEASEIDENTIFIERLOOSE",
          `(?:${i[o.NUMERICIDENTIFIERLOOSE]}|${i[o.NONNUMERICIDENTIFIER]})`
        ),
        n(
          "PRERELEASE",
          `(?:-(${i[o.PRERELEASEIDENTIFIER]}(?:\\.${
            i[o.PRERELEASEIDENTIFIER]
          })*))`
        ),
        n(
          "PRERELEASELOOSE",
          `(?:-?(${i[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
            i[o.PRERELEASEIDENTIFIERLOOSE]
          })*))`
        ),
        n("BUILDIDENTIFIER", `${c}+`),
        n(
          "BUILD",
          `(?:\\+(${i[o.BUILDIDENTIFIER]}(?:\\.${i[o.BUILDIDENTIFIER]})*))`
        ),
        n(
          "FULLPLAIN",
          `v?${i[o.MAINVERSION]}${i[o.PRERELEASE]}?${i[o.BUILD]}?`
        ),
        n("FULL", `^${i[o.FULLPLAIN]}$`),
        n(
          "LOOSEPLAIN",
          `[v=\\s]*${i[o.MAINVERSIONLOOSE]}${i[o.PRERELEASELOOSE]}?${
            i[o.BUILD]
          }?`
        ),
        n("LOOSE", `^${i[o.LOOSEPLAIN]}$`),
        n("GTLT", "((?:<|>)?=?)"),
        n("XRANGEIDENTIFIERLOOSE", `${i[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        n("XRANGEIDENTIFIER", `${i[o.NUMERICIDENTIFIER]}|x|X|\\*`),
        n(
          "XRANGEPLAIN",
          `[v=\\s]*(${i[o.XRANGEIDENTIFIER]})(?:\\.(${
            i[o.XRANGEIDENTIFIER]
          })(?:\\.(${i[o.XRANGEIDENTIFIER]})(?:${i[o.PRERELEASE]})?${
            i[o.BUILD]
          }?)?)?`
        ),
        n(
          "XRANGEPLAINLOOSE",
          `[v=\\s]*(${i[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
            i[o.XRANGEIDENTIFIERLOOSE]
          })(?:\\.(${i[o.XRANGEIDENTIFIERLOOSE]})(?:${i[o.PRERELEASELOOSE]})?${
            i[o.BUILD]
          }?)?)?`
        ),
        n("XRANGE", `^${i[o.GTLT]}\\s*${i[o.XRANGEPLAIN]}$`),
        n("XRANGELOOSE", `^${i[o.GTLT]}\\s*${i[o.XRANGEPLAINLOOSE]}$`),
        n(
          "COERCE",
          `(^|[^\\d])(\\d{1,${e}})(?:\\.(\\d{1,${e}}))?(?:\\.(\\d{1,${e}}))?(?:$|[^\\d])`
        ),
        n("COERCERTL", i[o.COERCE], !0),
        n("LONETILDE", "(?:~>?)"),
        n("TILDETRIM", `(\\s*)${i[o.LONETILDE]}\\s+`, !0),
        (s.tildeTrimReplace = "$1~"),
        n("TILDE", `^${i[o.LONETILDE]}${i[o.XRANGEPLAIN]}$`),
        n("TILDELOOSE", `^${i[o.LONETILDE]}${i[o.XRANGEPLAINLOOSE]}$`),
        n("LONECARET", "(?:\\^)"),
        n("CARETTRIM", `(\\s*)${i[o.LONECARET]}\\s+`, !0),
        (s.caretTrimReplace = "$1^"),
        n("CARET", `^${i[o.LONECARET]}${i[o.XRANGEPLAIN]}$`),
        n("CARETLOOSE", `^${i[o.LONECARET]}${i[o.XRANGEPLAINLOOSE]}$`),
        n("COMPARATORLOOSE", `^${i[o.GTLT]}\\s*(${i[o.LOOSEPLAIN]})$|^$`),
        n("COMPARATOR", `^${i[o.GTLT]}\\s*(${i[o.FULLPLAIN]})$|^$`),
        n(
          "COMPARATORTRIM",
          `(\\s*)${i[o.GTLT]}\\s*(${i[o.LOOSEPLAIN]}|${i[o.XRANGEPLAIN]})`,
          !0
        ),
        (s.comparatorTrimReplace = "$1$2$3"),
        n(
          "HYPHENRANGE",
          `^\\s*(${i[o.XRANGEPLAIN]})\\s+-\\s+(${i[o.XRANGEPLAIN]})\\s*$`
        ),
        n(
          "HYPHENRANGELOOSE",
          `^\\s*(${i[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${
            i[o.XRANGEPLAINLOOSE]
          })\\s*$`
        ),
        n("STAR", "(<|>)?=?\\s*\\*"),
        n("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
        n("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    },
    3756: (I, s, d) => {
      "use strict";
      const e = d(6952),
        m = Symbol("max"),
        u = Symbol("length"),
        f = Symbol("lengthCalculator"),
        h = Symbol("allowStale"),
        t = Symbol("maxAge"),
        i = Symbol("dispose"),
        o = Symbol("noDisposeOnSet"),
        l = Symbol("lruList"),
        c = Symbol("cache"),
        p = Symbol("updateAgeOnGet"),
        r = () => 1,
        a = (E, w, S) => {
          const T = E[c].get(w);
          if (T) {
            const k = T.value;
            if (g(E, k)) {
              if ((_(E, T), !E[h])) return;
            } else
              S && (E[p] && (T.value.now = Date.now()), E[l].unshiftNode(T));
            return k.value;
          }
        },
        g = (E, w) => {
          if (!w || (!w.maxAge && !E[t])) return !1;
          const S = Date.now() - w.now;
          return w.maxAge ? S > w.maxAge : E[t] && S > E[t];
        },
        y = (E) => {
          if (E[u] > E[m])
            for (let w = E[l].tail; E[u] > E[m] && null !== w; ) {
              const S = w.prev;
              _(E, w), (w = S);
            }
        },
        _ = (E, w) => {
          if (w) {
            const S = w.value;
            E[i] && E[i](S.key, S.value),
              (E[u] -= S.length),
              E[c].delete(S.key),
              E[l].removeNode(w);
          }
        };
      class v {
        constructor(w, S, T, k, x) {
          (this.key = w),
            (this.value = S),
            (this.length = T),
            (this.now = k),
            (this.maxAge = x || 0);
        }
      }
      const b = (E, w, S, T) => {
        let k = S.value;
        g(E, k) && (_(E, S), E[h] || (k = void 0)),
          k && w.call(T, k.value, k.key, E);
      };
      I.exports = class n {
        constructor(w) {
          if (
            ("number" == typeof w && (w = { max: w }),
            w || (w = {}),
            w.max && ("number" != typeof w.max || w.max < 0))
          )
            throw new TypeError("max must be a non-negative number");
          this[m] = w.max || 1 / 0;
          const T = w.length || r;
          if (
            ((this[f] = "function" != typeof T ? r : T),
            (this[h] = w.stale || !1),
            w.maxAge && "number" != typeof w.maxAge)
          )
            throw new TypeError("maxAge must be a number");
          (this[t] = w.maxAge || 0),
            (this[i] = w.dispose),
            (this[o] = w.noDisposeOnSet || !1),
            (this[p] = w.updateAgeOnGet || !1),
            this.reset();
        }
        set max(w) {
          if ("number" != typeof w || w < 0)
            throw new TypeError("max must be a non-negative number");
          (this[m] = w || 1 / 0), y(this);
        }
        get max() {
          return this[m];
        }
        set allowStale(w) {
          this[h] = !!w;
        }
        get allowStale() {
          return this[h];
        }
        set maxAge(w) {
          if ("number" != typeof w)
            throw new TypeError("maxAge must be a non-negative number");
          (this[t] = w), y(this);
        }
        get maxAge() {
          return this[t];
        }
        set lengthCalculator(w) {
          "function" != typeof w && (w = r),
            w !== this[f] &&
              ((this[f] = w),
              (this[u] = 0),
              this[l].forEach((S) => {
                (S.length = this[f](S.value, S.key)), (this[u] += S.length);
              })),
            y(this);
        }
        get lengthCalculator() {
          return this[f];
        }
        get length() {
          return this[u];
        }
        get itemCount() {
          return this[l].length;
        }
        rforEach(w, S) {
          S = S || this;
          for (let T = this[l].tail; null !== T; ) {
            const k = T.prev;
            b(this, w, T, S), (T = k);
          }
        }
        forEach(w, S) {
          S = S || this;
          for (let T = this[l].head; null !== T; ) {
            const k = T.next;
            b(this, w, T, S), (T = k);
          }
        }
        keys() {
          return this[l].toArray().map((w) => w.key);
        }
        values() {
          return this[l].toArray().map((w) => w.value);
        }
        reset() {
          this[i] &&
            this[l] &&
            this[l].length &&
            this[l].forEach((w) => this[i](w.key, w.value)),
            (this[c] = new Map()),
            (this[l] = new e()),
            (this[u] = 0);
        }
        dump() {
          return this[l]
            .map(
              (w) =>
                !g(this, w) && {
                  k: w.key,
                  v: w.value,
                  e: w.now + (w.maxAge || 0),
                }
            )
            .toArray()
            .filter((w) => w);
        }
        dumpLru() {
          return this[l];
        }
        set(w, S, T) {
          if ((T = T || this[t]) && "number" != typeof T)
            throw new TypeError("maxAge must be a number");
          const k = T ? Date.now() : 0,
            x = this[f](S, w);
          if (this[c].has(w)) {
            if (x > this[m]) return _(this, this[c].get(w)), !1;
            const re = this[c].get(w).value;
            return (
              this[i] && (this[o] || this[i](w, re.value)),
              (re.now = k),
              (re.maxAge = T),
              (re.value = S),
              (this[u] += x - re.length),
              (re.length = x),
              this.get(w),
              y(this),
              !0
            );
          }
          const $ = new v(w, S, x, k, T);
          return $.length > this[m]
            ? (this[i] && this[i](w, S), !1)
            : ((this[u] += $.length),
              this[l].unshift($),
              this[c].set(w, this[l].head),
              y(this),
              !0);
        }
        has(w) {
          if (!this[c].has(w)) return !1;
          const S = this[c].get(w).value;
          return !g(this, S);
        }
        get(w) {
          return a(this, w, !0);
        }
        peek(w) {
          return a(this, w, !1);
        }
        pop() {
          const w = this[l].tail;
          return w ? (_(this, w), w.value) : null;
        }
        del(w) {
          _(this, this[c].get(w));
        }
        load(w) {
          this.reset();
          const S = Date.now();
          for (let T = w.length - 1; T >= 0; T--) {
            const k = w[T],
              x = k.e || 0;
            if (0 === x) this.set(k.k, k.v);
            else {
              const $ = x - S;
              $ > 0 && this.set(k.k, k.v, $);
            }
          }
        }
        prune() {
          this[c].forEach((w, S) => a(this, S, !1));
        }
      };
    },
    32: (I) => {
      "use strict";
      I.exports = function (s) {
        s.prototype[Symbol.iterator] = function* () {
          for (let d = this.head; d; d = d.next) yield d.value;
        };
      };
    },
    6952: (I, s, d) => {
      "use strict";
      function e(t) {
        var i = this;
        if (
          (i instanceof e || (i = new e()),
          (i.tail = null),
          (i.head = null),
          (i.length = 0),
          t && "function" == typeof t.forEach)
        )
          t.forEach(function (c) {
            i.push(c);
          });
        else if (arguments.length > 0)
          for (var o = 0, l = arguments.length; o < l; o++)
            i.push(arguments[o]);
        return i;
      }
      function m(t, i, o) {
        var l = i === t.head ? new h(o, null, i, t) : new h(o, i, i.next, t);
        return (
          null === l.next && (t.tail = l),
          null === l.prev && (t.head = l),
          t.length++,
          l
        );
      }
      function u(t, i) {
        (t.tail = new h(i, t.tail, null, t)),
          t.head || (t.head = t.tail),
          t.length++;
      }
      function f(t, i) {
        (t.head = new h(i, null, t.head, t)),
          t.tail || (t.tail = t.head),
          t.length++;
      }
      function h(t, i, o, l) {
        if (!(this instanceof h)) return new h(t, i, o, l);
        (this.list = l),
          (this.value = t),
          i ? ((i.next = this), (this.prev = i)) : (this.prev = null),
          o ? ((o.prev = this), (this.next = o)) : (this.next = null);
      }
      (I.exports = e),
        (e.Node = h),
        (e.create = e),
        (e.prototype.removeNode = function (t) {
          if (t.list !== this)
            throw new Error("removing node which does not belong to this list");
          var i = t.next,
            o = t.prev;
          return (
            i && (i.prev = o),
            o && (o.next = i),
            t === this.head && (this.head = i),
            t === this.tail && (this.tail = o),
            t.list.length--,
            (t.next = null),
            (t.prev = null),
            (t.list = null),
            i
          );
        }),
        (e.prototype.unshiftNode = function (t) {
          if (t !== this.head) {
            t.list && t.list.removeNode(t);
            var i = this.head;
            (t.list = this),
              (t.next = i),
              i && (i.prev = t),
              (this.head = t),
              this.tail || (this.tail = t),
              this.length++;
          }
        }),
        (e.prototype.pushNode = function (t) {
          if (t !== this.tail) {
            t.list && t.list.removeNode(t);
            var i = this.tail;
            (t.list = this),
              (t.prev = i),
              i && (i.next = t),
              (this.tail = t),
              this.head || (this.head = t),
              this.length++;
          }
        }),
        (e.prototype.push = function () {
          for (var t = 0, i = arguments.length; t < i; t++)
            u(this, arguments[t]);
          return this.length;
        }),
        (e.prototype.unshift = function () {
          for (var t = 0, i = arguments.length; t < i; t++)
            f(this, arguments[t]);
          return this.length;
        }),
        (e.prototype.pop = function () {
          if (this.tail) {
            var t = this.tail.value;
            return (
              (this.tail = this.tail.prev),
              this.tail ? (this.tail.next = null) : (this.head = null),
              this.length--,
              t
            );
          }
        }),
        (e.prototype.shift = function () {
          if (this.head) {
            var t = this.head.value;
            return (
              (this.head = this.head.next),
              this.head ? (this.head.prev = null) : (this.tail = null),
              this.length--,
              t
            );
          }
        }),
        (e.prototype.forEach = function (t, i) {
          i = i || this;
          for (var o = this.head, l = 0; null !== o; l++)
            t.call(i, o.value, l, this), (o = o.next);
        }),
        (e.prototype.forEachReverse = function (t, i) {
          i = i || this;
          for (var o = this.tail, l = this.length - 1; null !== o; l--)
            t.call(i, o.value, l, this), (o = o.prev);
        }),
        (e.prototype.get = function (t) {
          for (var i = 0, o = this.head; null !== o && i < t; i++) o = o.next;
          if (i === t && null !== o) return o.value;
        }),
        (e.prototype.getReverse = function (t) {
          for (var i = 0, o = this.tail; null !== o && i < t; i++) o = o.prev;
          if (i === t && null !== o) return o.value;
        }),
        (e.prototype.map = function (t, i) {
          i = i || this;
          for (var o = new e(), l = this.head; null !== l; )
            o.push(t.call(i, l.value, this)), (l = l.next);
          return o;
        }),
        (e.prototype.mapReverse = function (t, i) {
          i = i || this;
          for (var o = new e(), l = this.tail; null !== l; )
            o.push(t.call(i, l.value, this)), (l = l.prev);
          return o;
        }),
        (e.prototype.reduce = function (t, i) {
          var o,
            l = this.head;
          if (arguments.length > 1) o = i;
          else {
            if (!this.head)
              throw new TypeError("Reduce of empty list with no initial value");
            (l = this.head.next), (o = this.head.value);
          }
          for (var c = 0; null !== l; c++) (o = t(o, l.value, c)), (l = l.next);
          return o;
        }),
        (e.prototype.reduceReverse = function (t, i) {
          var o,
            l = this.tail;
          if (arguments.length > 1) o = i;
          else {
            if (!this.tail)
              throw new TypeError("Reduce of empty list with no initial value");
            (l = this.tail.prev), (o = this.tail.value);
          }
          for (var c = this.length - 1; null !== l; c--)
            (o = t(o, l.value, c)), (l = l.prev);
          return o;
        }),
        (e.prototype.toArray = function () {
          for (
            var t = new Array(this.length), i = 0, o = this.head;
            null !== o;
            i++
          )
            (t[i] = o.value), (o = o.next);
          return t;
        }),
        (e.prototype.toArrayReverse = function () {
          for (
            var t = new Array(this.length), i = 0, o = this.tail;
            null !== o;
            i++
          )
            (t[i] = o.value), (o = o.prev);
          return t;
        }),
        (e.prototype.slice = function (t, i) {
          (i = i || this.length) < 0 && (i += this.length),
            (t = t || 0) < 0 && (t += this.length);
          var o = new e();
          if (i < t || i < 0) return o;
          t < 0 && (t = 0), i > this.length && (i = this.length);
          for (var l = 0, c = this.head; null !== c && l < t; l++) c = c.next;
          for (; null !== c && l < i; l++, c = c.next) o.push(c.value);
          return o;
        }),
        (e.prototype.sliceReverse = function (t, i) {
          (i = i || this.length) < 0 && (i += this.length),
            (t = t || 0) < 0 && (t += this.length);
          var o = new e();
          if (i < t || i < 0) return o;
          t < 0 && (t = 0), i > this.length && (i = this.length);
          for (var l = this.length, c = this.tail; null !== c && l > i; l--)
            c = c.prev;
          for (; null !== c && l > t; l--, c = c.prev) o.push(c.value);
          return o;
        }),
        (e.prototype.splice = function (t, i, ...o) {
          t > this.length && (t = this.length - 1),
            t < 0 && (t = this.length + t);
          for (var l = 0, c = this.head; null !== c && l < t; l++) c = c.next;
          var p = [];
          for (l = 0; c && l < i; l++)
            p.push(c.value), (c = this.removeNode(c));
          for (
            null === c && (c = this.tail),
              c !== this.head && c !== this.tail && (c = c.prev),
              l = 0;
            l < o.length;
            l++
          )
            c = m(this, c, o[l]);
          return p;
        }),
        (e.prototype.reverse = function () {
          for (
            var t = this.head, i = this.tail, o = t;
            null !== o;
            o = o.prev
          ) {
            var l = o.prev;
            (o.prev = o.next), (o.next = l);
          }
          return (this.head = i), (this.tail = t), this;
        });
      try {
        d(32)(e);
      } catch {}
    },
    562: (I, s, d) => {
      const e = d(7416);
      I.exports = (u, f, h) => e(u, f, ">", h);
    },
    4006: (I, s, d) => {
      const e = d(2441);
      I.exports = (u, f, h) => (
        (u = new e(u, h)), (f = new e(f, h)), u.intersects(f, h)
      );
    },
    3013: (I, s, d) => {
      const e = d(7416);
      I.exports = (u, f, h) => e(u, f, "<", h);
    },
    2755: (I, s, d) => {
      const e = d(1003),
        m = d(2441);
      I.exports = (f, h, t) => {
        let i = null,
          o = null,
          l = null;
        try {
          l = new m(h, t);
        } catch {
          return null;
        }
        return (
          f.forEach((c) => {
            l.test(c) &&
              (!i || -1 === o.compare(c)) &&
              ((i = c), (o = new e(i, t)));
          }),
          i
        );
      };
    },
    1639: (I, s, d) => {
      const e = d(1003),
        m = d(2441);
      I.exports = (f, h, t) => {
        let i = null,
          o = null,
          l = null;
        try {
          l = new m(h, t);
        } catch {
          return null;
        }
        return (
          f.forEach((c) => {
            l.test(c) &&
              (!i || 1 === o.compare(c)) &&
              ((i = c), (o = new e(i, t)));
          }),
          i
        );
      };
    },
    4816: (I, s, d) => {
      const e = d(1003),
        m = d(2441),
        u = d(6691);
      I.exports = (h, t) => {
        h = new m(h, t);
        let i = new e("0.0.0");
        if (h.test(i) || ((i = new e("0.0.0-0")), h.test(i))) return i;
        i = null;
        for (let o = 0; o < h.set.length; ++o) {
          let c = null;
          h.set[o].forEach((p) => {
            const r = new e(p.semver.version);
            switch (p.operator) {
              case ">":
                0 === r.prerelease.length ? r.patch++ : r.prerelease.push(0),
                  (r.raw = r.format());
              case "":
              case ">=":
                (!c || u(r, c)) && (c = r);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error(`Unexpected operation: ${p.operator}`);
            }
          }),
            c && (!i || u(i, c)) && (i = c);
        }
        return i && h.test(i) ? i : null;
      };
    },
    7416: (I, s, d) => {
      const e = d(1003),
        m = d(1858),
        { ANY: u } = m,
        f = d(2441),
        h = d(7100),
        t = d(6691),
        i = d(2473),
        o = d(9776),
        l = d(4302);
      I.exports = (p, r, n, a) => {
        let g, y, _, v, b;
        switch (((p = new e(p, a)), (r = new f(r, a)), n)) {
          case ">":
            (g = t), (y = o), (_ = i), (v = ">"), (b = ">=");
            break;
          case "<":
            (g = i), (y = l), (_ = t), (v = "<"), (b = "<=");
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (h(p, r, a)) return !1;
        for (let E = 0; E < r.set.length; ++E) {
          let S = null,
            T = null;
          if (
            (r.set[E].forEach((k) => {
              k.semver === u && (k = new m(">=0.0.0")),
                (S = S || k),
                (T = T || k),
                g(k.semver, S.semver, a)
                  ? (S = k)
                  : _(k.semver, T.semver, a) && (T = k);
            }),
            S.operator === v ||
              S.operator === b ||
              ((!T.operator || T.operator === v) && y(p, T.semver)))
          )
            return !1;
          if (T.operator === b && _(p, T.semver)) return !1;
        }
        return !0;
      };
    },
    2326: (I, s, d) => {
      const e = d(7100),
        m = d(2214);
      I.exports = (u, f, h) => {
        const t = [];
        let i = null,
          o = null;
        const l = u.sort((n, a) => m(n, a, h));
        for (const n of l)
          e(n, f, h)
            ? ((o = n), i || (i = n))
            : (o && t.push([i, o]), (o = null), (i = null));
        i && t.push([i, null]);
        const c = [];
        for (const [n, a] of t)
          c.push(
            n === a
              ? n
              : a || n !== l[0]
              ? a
                ? n === l[0]
                  ? `<=${a}`
                  : `${n} - ${a}`
                : `>=${n}`
              : "*"
          );
        const p = c.join(" || "),
          r = "string" == typeof f.raw ? f.raw : String(f);
        return p.length < r.length ? p : f;
      };
    },
    1538: (I, s, d) => {
      const e = d(2441),
        m = d(1858),
        { ANY: u } = m,
        f = d(7100),
        h = d(2214),
        i = [new m(">=0.0.0-0")],
        o = [new m(">=0.0.0")],
        l = (r, n, a) => {
          if (r === n) return !0;
          if (1 === r.length && r[0].semver === u) {
            if (1 === n.length && n[0].semver === u) return !0;
            r = a.includePrerelease ? i : o;
          }
          if (1 === n.length && n[0].semver === u) {
            if (a.includePrerelease) return !0;
            n = o;
          }
          const g = new Set();
          let y, _, v;
          for (const x of r)
            ">" === x.operator || ">=" === x.operator
              ? (y = c(y, x, a))
              : "<" === x.operator || "<=" === x.operator
              ? (_ = p(_, x, a))
              : g.add(x.semver);
          if (g.size > 1) return null;
          if (y && _) {
            if (((v = h(y.semver, _.semver, a)), v > 0)) return null;
            if (0 === v && (">=" !== y.operator || "<=" !== _.operator))
              return null;
          }
          for (const x of g) {
            if ((y && !f(x, String(y), a)) || (_ && !f(x, String(_), a)))
              return null;
            for (const $ of n) if (!f(x, String($), a)) return !1;
            return !0;
          }
          let b,
            E,
            w,
            S,
            T =
              !(!_ || a.includePrerelease || !_.semver.prerelease.length) &&
              _.semver,
            k =
              !(!y || a.includePrerelease || !y.semver.prerelease.length) &&
              y.semver;
          T &&
            1 === T.prerelease.length &&
            "<" === _.operator &&
            0 === T.prerelease[0] &&
            (T = !1);
          for (const x of n) {
            if (
              ((S = S || ">" === x.operator || ">=" === x.operator),
              (w = w || "<" === x.operator || "<=" === x.operator),
              y)
            )
              if (
                (k &&
                  x.semver.prerelease &&
                  x.semver.prerelease.length &&
                  x.semver.major === k.major &&
                  x.semver.minor === k.minor &&
                  x.semver.patch === k.patch &&
                  (k = !1),
                ">" === x.operator || ">=" === x.operator)
              ) {
                if (((b = c(y, x, a)), b === x && b !== y)) return !1;
              } else if (">=" === y.operator && !f(y.semver, String(x), a))
                return !1;
            if (_)
              if (
                (T &&
                  x.semver.prerelease &&
                  x.semver.prerelease.length &&
                  x.semver.major === T.major &&
                  x.semver.minor === T.minor &&
                  x.semver.patch === T.patch &&
                  (T = !1),
                "<" === x.operator || "<=" === x.operator)
              ) {
                if (((E = p(_, x, a)), E === x && E !== _)) return !1;
              } else if ("<=" === _.operator && !f(_.semver, String(x), a))
                return !1;
            if (!x.operator && (_ || y) && 0 !== v) return !1;
          }
          return !(
            (y && w && !_ && 0 !== v) ||
            (_ && S && !y && 0 !== v) ||
            k ||
            T
          );
        },
        c = (r, n, a) => {
          if (!r) return n;
          const g = h(r.semver, n.semver, a);
          return g > 0
            ? r
            : g < 0 || (">" === n.operator && ">=" === r.operator)
            ? n
            : r;
        },
        p = (r, n, a) => {
          if (!r) return n;
          const g = h(r.semver, n.semver, a);
          return g < 0
            ? r
            : g > 0 || ("<" === n.operator && "<=" === r.operator)
            ? n
            : r;
        };
      I.exports = (r, n, a = {}) => {
        if (r === n) return !0;
        (r = new e(r, a)), (n = new e(n, a));
        let g = !1;
        e: for (const y of r.set) {
          for (const _ of n.set) {
            const v = l(y, _, a);
            if (((g = g || null !== v), v)) continue e;
          }
          if (g) return !1;
        }
        return !0;
      };
    },
    1250: (I, s, d) => {
      const e = d(2441);
      I.exports = (u, f) =>
        new e(u, f).set.map((h) =>
          h
            .map((t) => t.value)
            .join(" ")
            .trim()
            .split(" ")
        );
    },
    2321: (I, s, d) => {
      const e = d(2441);
      I.exports = (u, f) => {
        try {
          return new e(u, f).range || "*";
        } catch {
          return null;
        }
      };
    },
    3581: (I, s, d) => {
      var e = d(843).Buffer;
      function m(u, f) {
        (this._block = e.alloc(u)),
          (this._finalSize = f),
          (this._blockSize = u),
          (this._len = 0);
      }
      (m.prototype.update = function (u, f) {
        "string" == typeof u && (u = e.from(u, (f = f || "utf8")));
        for (
          var h = this._block,
            t = this._blockSize,
            i = u.length,
            o = this._len,
            l = 0;
          l < i;

        ) {
          for (var c = o % t, p = Math.min(i - l, t - c), r = 0; r < p; r++)
            h[c + r] = u[l + r];
          (l += p), (o += p) % t == 0 && this._update(h);
        }
        return (this._len += i), this;
      }),
        (m.prototype.digest = function (u) {
          var f = this._len % this._blockSize;
          (this._block[f] = 128),
            this._block.fill(0, f + 1),
            f >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var h = 8 * this._len;
          if (h <= 4294967295)
            this._block.writeUInt32BE(h, this._blockSize - 4);
          else {
            var t = (4294967295 & h) >>> 0;
            this._block.writeUInt32BE(
              (h - t) / 4294967296,
              this._blockSize - 8
            ),
              this._block.writeUInt32BE(t, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return u ? o.toString(u) : o;
        }),
        (m.prototype._update = function () {
          throw new Error("_update must be implemented by subclass");
        }),
        (I.exports = m);
    },
    7965: (I, s, d) => {
      var e = (I.exports = function (u) {
        u = u.toLowerCase();
        var f = e[u];
        if (!f)
          throw new Error(u + " is not supported (we accept pull requests)");
        return new f();
      });
      (e.sha = d(7915)),
        (e.sha1 = d(1229)),
        (e.sha224 = d(2959)),
        (e.sha256 = d(450)),
        (e.sha384 = d(1723)),
        (e.sha512 = d(7914));
    },
    7915: (I, s, d) => {
      var e = d(6698),
        m = d(3581),
        u = d(843).Buffer,
        f = [1518500249, 1859775393, -1894007588, -899497514],
        h = new Array(80);
      function t() {
        this.init(), (this._w = h), m.call(this, 64, 56);
      }
      function i(c) {
        return (c << 5) | (c >>> 27);
      }
      function o(c) {
        return (c << 30) | (c >>> 2);
      }
      function l(c, p, r, n) {
        return 0 === c
          ? (p & r) | (~p & n)
          : 2 === c
          ? (p & r) | (p & n) | (r & n)
          : p ^ r ^ n;
      }
      e(t, m),
        (t.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (t.prototype._update = function (c) {
          for (
            var p = this._w,
              r = 0 | this._a,
              n = 0 | this._b,
              a = 0 | this._c,
              g = 0 | this._d,
              y = 0 | this._e,
              _ = 0;
            _ < 16;
            ++_
          )
            p[_] = c.readInt32BE(4 * _);
          for (; _ < 80; ++_)
            p[_] = p[_ - 3] ^ p[_ - 8] ^ p[_ - 14] ^ p[_ - 16];
          for (var v = 0; v < 80; ++v) {
            var b = ~~(v / 20),
              E = (i(r) + l(b, n, a, g) + y + p[v] + f[b]) | 0;
            (y = g), (g = a), (a = o(n)), (n = r), (r = E);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (a + this._c) | 0),
            (this._d = (g + this._d) | 0),
            (this._e = (y + this._e) | 0);
        }),
        (t.prototype._hash = function () {
          var c = u.allocUnsafe(20);
          return (
            c.writeInt32BE(0 | this._a, 0),
            c.writeInt32BE(0 | this._b, 4),
            c.writeInt32BE(0 | this._c, 8),
            c.writeInt32BE(0 | this._d, 12),
            c.writeInt32BE(0 | this._e, 16),
            c
          );
        }),
        (I.exports = t);
    },
    1229: (I, s, d) => {
      var e = d(6698),
        m = d(3581),
        u = d(843).Buffer,
        f = [1518500249, 1859775393, -1894007588, -899497514],
        h = new Array(80);
      function t() {
        this.init(), (this._w = h), m.call(this, 64, 56);
      }
      function i(p) {
        return (p << 1) | (p >>> 31);
      }
      function o(p) {
        return (p << 5) | (p >>> 27);
      }
      function l(p) {
        return (p << 30) | (p >>> 2);
      }
      function c(p, r, n, a) {
        return 0 === p
          ? (r & n) | (~r & a)
          : 2 === p
          ? (r & n) | (r & a) | (n & a)
          : r ^ n ^ a;
      }
      e(t, m),
        (t.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (t.prototype._update = function (p) {
          for (
            var r = this._w,
              n = 0 | this._a,
              a = 0 | this._b,
              g = 0 | this._c,
              y = 0 | this._d,
              _ = 0 | this._e,
              v = 0;
            v < 16;
            ++v
          )
            r[v] = p.readInt32BE(4 * v);
          for (; v < 80; ++v)
            r[v] = i(r[v - 3] ^ r[v - 8] ^ r[v - 14] ^ r[v - 16]);
          for (var b = 0; b < 80; ++b) {
            var E = ~~(b / 20),
              w = (o(n) + c(E, a, g, y) + _ + r[b] + f[E]) | 0;
            (_ = y), (y = g), (g = l(a)), (a = n), (n = w);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (a + this._b) | 0),
            (this._c = (g + this._c) | 0),
            (this._d = (y + this._d) | 0),
            (this._e = (_ + this._e) | 0);
        }),
        (t.prototype._hash = function () {
          var p = u.allocUnsafe(20);
          return (
            p.writeInt32BE(0 | this._a, 0),
            p.writeInt32BE(0 | this._b, 4),
            p.writeInt32BE(0 | this._c, 8),
            p.writeInt32BE(0 | this._d, 12),
            p.writeInt32BE(0 | this._e, 16),
            p
          );
        }),
        (I.exports = t);
    },
    2959: (I, s, d) => {
      var e = d(6698),
        m = d(450),
        u = d(3581),
        f = d(843).Buffer,
        h = new Array(64);
      function t() {
        this.init(), (this._w = h), u.call(this, 64, 56);
      }
      e(t, m),
        (t.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (t.prototype._hash = function () {
          var i = f.allocUnsafe(28);
          return (
            i.writeInt32BE(this._a, 0),
            i.writeInt32BE(this._b, 4),
            i.writeInt32BE(this._c, 8),
            i.writeInt32BE(this._d, 12),
            i.writeInt32BE(this._e, 16),
            i.writeInt32BE(this._f, 20),
            i.writeInt32BE(this._g, 24),
            i
          );
        }),
        (I.exports = t);
    },
    450: (I, s, d) => {
      var e = d(6698),
        m = d(3581),
        u = d(843).Buffer,
        f = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        h = new Array(64);
      function t() {
        this.init(), (this._w = h), m.call(this, 64, 56);
      }
      function i(n, a, g) {
        return g ^ (n & (a ^ g));
      }
      function o(n, a, g) {
        return (n & a) | (g & (n | a));
      }
      function l(n) {
        return (
          ((n >>> 2) | (n << 30)) ^
          ((n >>> 13) | (n << 19)) ^
          ((n >>> 22) | (n << 10))
        );
      }
      function c(n) {
        return (
          ((n >>> 6) | (n << 26)) ^
          ((n >>> 11) | (n << 21)) ^
          ((n >>> 25) | (n << 7))
        );
      }
      function p(n) {
        return ((n >>> 7) | (n << 25)) ^ ((n >>> 18) | (n << 14)) ^ (n >>> 3);
      }
      function r(n) {
        return ((n >>> 17) | (n << 15)) ^ ((n >>> 19) | (n << 13)) ^ (n >>> 10);
      }
      e(t, m),
        (t.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (t.prototype._update = function (n) {
          for (
            var a = this._w,
              g = 0 | this._a,
              y = 0 | this._b,
              _ = 0 | this._c,
              v = 0 | this._d,
              b = 0 | this._e,
              E = 0 | this._f,
              w = 0 | this._g,
              S = 0 | this._h,
              T = 0;
            T < 16;
            ++T
          )
            a[T] = n.readInt32BE(4 * T);
          for (; T < 64; ++T)
            a[T] = (r(a[T - 2]) + a[T - 7] + p(a[T - 15]) + a[T - 16]) | 0;
          for (var k = 0; k < 64; ++k) {
            var x = (S + c(b) + i(b, E, w) + f[k] + a[k]) | 0,
              $ = (l(g) + o(g, y, _)) | 0;
            (S = w),
              (w = E),
              (E = b),
              (b = (v + x) | 0),
              (v = _),
              (_ = y),
              (y = g),
              (g = (x + $) | 0);
          }
          (this._a = (g + this._a) | 0),
            (this._b = (y + this._b) | 0),
            (this._c = (_ + this._c) | 0),
            (this._d = (v + this._d) | 0),
            (this._e = (b + this._e) | 0),
            (this._f = (E + this._f) | 0),
            (this._g = (w + this._g) | 0),
            (this._h = (S + this._h) | 0);
        }),
        (t.prototype._hash = function () {
          var n = u.allocUnsafe(32);
          return (
            n.writeInt32BE(this._a, 0),
            n.writeInt32BE(this._b, 4),
            n.writeInt32BE(this._c, 8),
            n.writeInt32BE(this._d, 12),
            n.writeInt32BE(this._e, 16),
            n.writeInt32BE(this._f, 20),
            n.writeInt32BE(this._g, 24),
            n.writeInt32BE(this._h, 28),
            n
          );
        }),
        (I.exports = t);
    },
    1723: (I, s, d) => {
      var e = d(6698),
        m = d(7914),
        u = d(3581),
        f = d(843).Buffer,
        h = new Array(160);
      function t() {
        this.init(), (this._w = h), u.call(this, 128, 112);
      }
      e(t, m),
        (t.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (t.prototype._hash = function () {
          var i = f.allocUnsafe(48);
          function o(l, c, p) {
            i.writeInt32BE(l, p), i.writeInt32BE(c, p + 4);
          }
          return (
            o(this._ah, this._al, 0),
            o(this._bh, this._bl, 8),
            o(this._ch, this._cl, 16),
            o(this._dh, this._dl, 24),
            o(this._eh, this._el, 32),
            o(this._fh, this._fl, 40),
            i
          );
        }),
        (I.exports = t);
    },
    7914: (I, s, d) => {
      var e = d(6698),
        m = d(3581),
        u = d(843).Buffer,
        f = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        h = new Array(160);
      function t() {
        this.init(), (this._w = h), m.call(this, 128, 112);
      }
      function i(y, _, v) {
        return v ^ (y & (_ ^ v));
      }
      function o(y, _, v) {
        return (y & _) | (v & (y | _));
      }
      function l(y, _) {
        return (
          ((y >>> 28) | (_ << 4)) ^
          ((_ >>> 2) | (y << 30)) ^
          ((_ >>> 7) | (y << 25))
        );
      }
      function c(y, _) {
        return (
          ((y >>> 14) | (_ << 18)) ^
          ((y >>> 18) | (_ << 14)) ^
          ((_ >>> 9) | (y << 23))
        );
      }
      function p(y, _) {
        return ((y >>> 1) | (_ << 31)) ^ ((y >>> 8) | (_ << 24)) ^ (y >>> 7);
      }
      function r(y, _) {
        return (
          ((y >>> 1) | (_ << 31)) ^
          ((y >>> 8) | (_ << 24)) ^
          ((y >>> 7) | (_ << 25))
        );
      }
      function n(y, _) {
        return ((y >>> 19) | (_ << 13)) ^ ((_ >>> 29) | (y << 3)) ^ (y >>> 6);
      }
      function a(y, _) {
        return (
          ((y >>> 19) | (_ << 13)) ^
          ((_ >>> 29) | (y << 3)) ^
          ((y >>> 6) | (_ << 26))
        );
      }
      function g(y, _) {
        return y >>> 0 < _ >>> 0 ? 1 : 0;
      }
      e(t, m),
        (t.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (t.prototype._update = function (y) {
          for (
            var _ = this._w,
              v = 0 | this._ah,
              b = 0 | this._bh,
              E = 0 | this._ch,
              w = 0 | this._dh,
              S = 0 | this._eh,
              T = 0 | this._fh,
              k = 0 | this._gh,
              x = 0 | this._hh,
              $ = 0 | this._al,
              G = 0 | this._bl,
              re = 0 | this._cl,
              le = 0 | this._dl,
              Y = 0 | this._el,
              Q = 0 | this._fl,
              X = 0 | this._gl,
              B = 0 | this._hl,
              z = 0;
            z < 32;
            z += 2
          )
            (_[z] = y.readInt32BE(4 * z)),
              (_[z + 1] = y.readInt32BE(4 * z + 4));
          for (; z < 160; z += 2) {
            var K = _[z - 30],
              H = _[z - 30 + 1],
              W = p(K, H),
              V = r(H, K),
              ee = n((K = _[z - 4]), (H = _[z - 4 + 1])),
              ie = a(H, K),
              de = _[z - 32],
              j = _[z - 32 + 1],
              F = (V + _[z - 14 + 1]) | 0,
              A = (W + _[z - 14] + g(F, V)) | 0;
            (A =
              ((A = (A + ee + g((F = (F + ie) | 0), ie)) | 0) +
                de +
                g((F = (F + j) | 0), j)) |
              0),
              (_[z] = A),
              (_[z + 1] = F);
          }
          for (var N = 0; N < 160; N += 2) {
            (A = _[N]), (F = _[N + 1]);
            var D = o(v, b, E),
              C = o($, G, re),
              R = l(v, $),
              L = l($, v),
              J = c(S, Y),
              se = c(Y, S),
              ne = f[N],
              te = f[N + 1],
              he = i(S, T, k),
              Z = i(Y, Q, X),
              fe = (B + se) | 0,
              oe = (x + J + g(fe, B)) | 0;
            oe =
              ((oe =
                ((oe = (oe + he + g((fe = (fe + Z) | 0), Z)) | 0) +
                  ne +
                  g((fe = (fe + te) | 0), te)) |
                0) +
                A +
                g((fe = (fe + F) | 0), F)) |
              0;
            var pe = (L + C) | 0,
              M = (R + D + g(pe, L)) | 0;
            (x = k),
              (B = X),
              (k = T),
              (X = Q),
              (T = S),
              (Q = Y),
              (S = (w + oe + g((Y = (le + fe) | 0), le)) | 0),
              (w = E),
              (le = re),
              (E = b),
              (re = G),
              (b = v),
              (G = $),
              (v = (oe + M + g(($ = (fe + pe) | 0), fe)) | 0);
          }
          (this._al = (this._al + $) | 0),
            (this._bl = (this._bl + G) | 0),
            (this._cl = (this._cl + re) | 0),
            (this._dl = (this._dl + le) | 0),
            (this._el = (this._el + Y) | 0),
            (this._fl = (this._fl + Q) | 0),
            (this._gl = (this._gl + X) | 0),
            (this._hl = (this._hl + B) | 0),
            (this._ah = (this._ah + v + g(this._al, $)) | 0),
            (this._bh = (this._bh + b + g(this._bl, G)) | 0),
            (this._ch = (this._ch + E + g(this._cl, re)) | 0),
            (this._dh = (this._dh + w + g(this._dl, le)) | 0),
            (this._eh = (this._eh + S + g(this._el, Y)) | 0),
            (this._fh = (this._fh + T + g(this._fl, Q)) | 0),
            (this._gh = (this._gh + k + g(this._gl, X)) | 0),
            (this._hh = (this._hh + x + g(this._hl, B)) | 0);
        }),
        (t.prototype._hash = function () {
          var y = u.allocUnsafe(64);
          function _(v, b, E) {
            y.writeInt32BE(v, E), y.writeInt32BE(b, E + 4);
          }
          return (
            _(this._ah, this._al, 0),
            _(this._bh, this._bl, 8),
            _(this._ch, this._cl, 16),
            _(this._dh, this._dl, 24),
            _(this._eh, this._el, 32),
            _(this._fh, this._fl, 40),
            _(this._gh, this._gl, 48),
            _(this._hh, this._hl, 56),
            y
          );
        }),
        (I.exports = t);
    },
    2024: (I, s, d) => {
      "use strict";
      var e = d(843).Buffer,
        m =
          e.isEncoding ||
          function (v) {
            switch ((v = "" + v) && v.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function h(v) {
        var b;
        switch (
          ((this.encoding = (function f(v) {
            var b = (function u(v) {
              if (!v) return "utf8";
              for (var b; ; )
                switch (v) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return v;
                  default:
                    if (b) return;
                    (v = ("" + v).toLowerCase()), (b = !0);
                }
            })(v);
            if ("string" != typeof b && (e.isEncoding === m || !m(v)))
              throw new Error("Unknown encoding: " + v);
            return b || v;
          })(v)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = r), (this.end = n), (b = 4);
            break;
          case "utf8":
            (this.fillLast = l), (b = 4);
            break;
          case "base64":
            (this.text = a), (this.end = g), (b = 3);
            break;
          default:
            return (this.write = y), void (this.end = _);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = e.allocUnsafe(b));
      }
      function t(v) {
        return v <= 127
          ? 0
          : v >> 5 == 6
          ? 2
          : v >> 4 == 14
          ? 3
          : v >> 3 == 30
          ? 4
          : v >> 6 == 2
          ? -1
          : -2;
      }
      function l(v) {
        var b = this.lastTotal - this.lastNeed,
          E = (function o(v, b, E) {
            if (128 != (192 & b[0])) return (v.lastNeed = 0), "\ufffd";
            if (v.lastNeed > 1 && b.length > 1) {
              if (128 != (192 & b[1])) return (v.lastNeed = 1), "\ufffd";
              if (v.lastNeed > 2 && b.length > 2 && 128 != (192 & b[2]))
                return (v.lastNeed = 2), "\ufffd";
            }
          })(this, v);
        return void 0 !== E
          ? E
          : this.lastNeed <= v.length
          ? (v.copy(this.lastChar, b, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (v.copy(this.lastChar, b, 0, v.length),
            void (this.lastNeed -= v.length));
      }
      function r(v, b) {
        if ((v.length - b) % 2 == 0) {
          var E = v.toString("utf16le", b);
          if (E) {
            var w = E.charCodeAt(E.length - 1);
            if (w >= 55296 && w <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = v[v.length - 2]),
                (this.lastChar[1] = v[v.length - 1]),
                E.slice(0, -1)
              );
          }
          return E;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = v[v.length - 1]),
          v.toString("utf16le", b, v.length - 1)
        );
      }
      function n(v) {
        var b = v && v.length ? this.write(v) : "";
        return this.lastNeed
          ? b +
              this.lastChar.toString(
                "utf16le",
                0,
                this.lastTotal - this.lastNeed
              )
          : b;
      }
      function a(v, b) {
        var E = (v.length - b) % 3;
        return 0 === E
          ? v.toString("base64", b)
          : ((this.lastNeed = 3 - E),
            (this.lastTotal = 3),
            1 === E
              ? (this.lastChar[0] = v[v.length - 1])
              : ((this.lastChar[0] = v[v.length - 2]),
                (this.lastChar[1] = v[v.length - 1])),
            v.toString("base64", b, v.length - E));
      }
      function g(v) {
        var b = v && v.length ? this.write(v) : "";
        return this.lastNeed
          ? b + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : b;
      }
      function y(v) {
        return v.toString(this.encoding);
      }
      function _(v) {
        return v && v.length ? this.write(v) : "";
      }
      (s.s = h),
        (h.prototype.write = function (v) {
          if (0 === v.length) return "";
          var b, E;
          if (this.lastNeed) {
            if (void 0 === (b = this.fillLast(v))) return "";
            (E = this.lastNeed), (this.lastNeed = 0);
          } else E = 0;
          return E < v.length
            ? b
              ? b + this.text(v, E)
              : this.text(v, E)
            : b || "";
        }),
        (h.prototype.end = function p(v) {
          var b = v && v.length ? this.write(v) : "";
          return this.lastNeed ? b + "\ufffd" : b;
        }),
        (h.prototype.text = function c(v, b) {
          var E = (function i(v, b, E) {
            var w = b.length - 1;
            if (w < E) return 0;
            var S = t(b[w]);
            return S >= 0
              ? (S > 0 && (v.lastNeed = S - 1), S)
              : --w < E || -2 === S
              ? 0
              : (S = t(b[w])) >= 0
              ? (S > 0 && (v.lastNeed = S - 2), S)
              : --w < E || -2 === S
              ? 0
              : (S = t(b[w])) >= 0
              ? (S > 0 && (2 === S ? (S = 0) : (v.lastNeed = S - 3)), S)
              : 0;
          })(this, v, b);
          if (!this.lastNeed) return v.toString("utf8", b);
          this.lastTotal = E;
          var w = v.length - (E - this.lastNeed);
          return v.copy(this.lastChar, 0, w), v.toString("utf8", b, w);
        }),
        (h.prototype.fillLast = function (v) {
          if (this.lastNeed <= v.length)
            return (
              v.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          v.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, v.length),
            (this.lastNeed -= v.length);
        });
    },
    496: (I) => {
      function d(e) {
        try {
          if (!global.localStorage) return !1;
        } catch {
          return !1;
        }
        var m = global.localStorage[e];
        return null != m && "true" === String(m).toLowerCase();
      }
      I.exports = function s(e, m) {
        if (d("noDeprecation")) return e;
        var u = !1;
        return function f() {
          if (!u) {
            if (d("throwDeprecation")) throw new Error(m);
            d("traceDeprecation") ? console.trace(m) : console.warn(m),
              (u = !0);
          }
          return e.apply(this, arguments);
        };
      };
    },
    498: (I) => {
      I.exports = function d() {
        for (var e = {}, m = 0; m < arguments.length; m++) {
          var u = arguments[m];
          for (var f in u) s.call(u, f) && (e[f] = u[f]);
        }
        return e;
      };
      var s = Object.prototype.hasOwnProperty;
    },
    2361: () => {},
    4616: () => {},
    3921: (I, s, d) => {
      "use strict";
      d.r(s),
        d.d(s, {
          Struct: () => c,
          StructError: () => e,
          any: () => x,
          array: () => $,
          assert: () => p,
          assign: () => y,
          bigint: () => G,
          boolean: () => re,
          coerce: () => R,
          create: () => r,
          date: () => le,
          defaulted: () => L,
          define: () => _,
          deprecated: () => v,
          dynamic: () => b,
          empty: () => se,
          enums: () => Y,
          func: () => Q,
          instance: () => X,
          integer: () => B,
          intersection: () => z,
          is: () => a,
          lazy: () => E,
          literal: () => K,
          map: () => H,
          mask: () => n,
          max: () => te,
          min: () => he,
          never: () => W,
          nonempty: () => Z,
          nullable: () => V,
          number: () => ee,
          object: () => ie,
          omit: () => w,
          optional: () => ue,
          partial: () => S,
          pattern: () => fe,
          pick: () => T,
          record: () => ce,
          refine: () => pe,
          regexp: () => de,
          set: () => j,
          size: () => oe,
          string: () => F,
          struct: () => k,
          trimmed: () => J,
          tuple: () => A,
          type: () => N,
          union: () => D,
          unknown: () => C,
          validate: () => g,
        });
      class e extends TypeError {
        constructor(P, O) {
          let U;
          const { message: q, explanation: ae, ...ge } = P,
            { path: _e } = P,
            me = 0 === _e.length ? q : `At path: ${_e.join(".")} -- ${q}`;
          super(ae ?? me),
            null != ae && (this.cause = me),
            Object.assign(this, ge),
            (this.name = this.constructor.name),
            (this.failures = () => U ?? (U = [P, ...O()]));
        }
      }
      function u(M) {
        return "object" == typeof M && null != M;
      }
      function f(M) {
        if ("[object Object]" !== Object.prototype.toString.call(M)) return !1;
        const P = Object.getPrototypeOf(M);
        return null === P || P === Object.prototype;
      }
      function h(M) {
        return "symbol" == typeof M
          ? M.toString()
          : "string" == typeof M
          ? JSON.stringify(M)
          : `${M}`;
      }
      function i(M, P, O, U) {
        if (!0 === M) return;
        !1 === M ? (M = {}) : "string" == typeof M && (M = { message: M });
        const { path: q, branch: ae } = P,
          { type: ge } = O,
          {
            refinement: _e,
            message: me = `Expected a value of type \`${ge}\`${
              _e ? ` with refinement \`${_e}\`` : ""
            }, but received: \`${h(U)}\``,
          } = M;
        return {
          value: U,
          type: ge,
          refinement: _e,
          key: q[q.length - 1],
          path: q,
          branch: ae,
          ...M,
          message: me,
        };
      }
      function* o(M, P, O, U) {
        (function m(M) {
          return u(M) && "function" == typeof M[Symbol.iterator];
        })(M) || (M = [M]);
        for (const q of M) {
          const ae = i(q, P, O, U);
          ae && (yield ae);
        }
      }
      function* l(M, P, O = {}) {
        const {
            path: U = [],
            branch: q = [M],
            coerce: ae = !1,
            mask: ge = !1,
          } = O,
          _e = { path: U, branch: q };
        if (
          ae &&
          ((M = P.coercer(M, _e)),
          ge && "type" !== P.type && u(P.schema) && u(M) && !Array.isArray(M))
        )
          for (const be in M) void 0 === P.schema[be] && delete M[be];
        let me = "valid";
        for (const be of P.validator(M, _e))
          (be.explanation = O.message), (me = "not_valid"), yield [be, void 0];
        for (let [be, ye, ve] of P.entries(M, _e)) {
          const we = l(ye, ve, {
            path: void 0 === be ? U : [...U, be],
            branch: void 0 === be ? q : [...q, ye],
            coerce: ae,
            mask: ge,
            message: O.message,
          });
          for (const Ee of we)
            Ee[0]
              ? ((me = null != Ee[0].refinement ? "not_refined" : "not_valid"),
                yield [Ee[0], void 0])
              : ae &&
                ((ye = Ee[1]),
                void 0 === be
                  ? (M = ye)
                  : M instanceof Map
                  ? M.set(be, ye)
                  : M instanceof Set
                  ? M.add(ye)
                  : u(M) && (void 0 !== ye || be in M) && (M[be] = ye));
        }
        if ("not_valid" !== me)
          for (const be of P.refiner(M, _e))
            (be.explanation = O.message),
              (me = "not_refined"),
              yield [be, void 0];
        "valid" === me && (yield [void 0, M]);
      }
      class c {
        constructor(P) {
          const {
            type: O,
            schema: U,
            validator: q,
            refiner: ae,
            coercer: ge = (me) => me,
            entries: _e = function* () {},
          } = P;
          (this.type = O),
            (this.schema = U),
            (this.entries = _e),
            (this.coercer = ge),
            (this.validator = q
              ? (me, be) => o(q(me, be), be, this, me)
              : () => []),
            (this.refiner = ae
              ? (me, be) => o(ae(me, be), be, this, me)
              : () => []);
        }
        assert(P, O) {
          return p(P, this, O);
        }
        create(P, O) {
          return r(P, this, O);
        }
        is(P) {
          return a(P, this);
        }
        mask(P, O) {
          return n(P, this, O);
        }
        validate(P, O = {}) {
          return g(P, this, O);
        }
      }
      function p(M, P, O) {
        const U = g(M, P, { message: O });
        if (U[0]) throw U[0];
      }
      function r(M, P, O) {
        const U = g(M, P, { coerce: !0, message: O });
        if (U[0]) throw U[0];
        return U[1];
      }
      function n(M, P, O) {
        const U = g(M, P, { coerce: !0, mask: !0, message: O });
        if (U[0]) throw U[0];
        return U[1];
      }
      function a(M, P) {
        return !g(M, P)[0];
      }
      function g(M, P, O = {}) {
        const U = l(M, P, O),
          q = (function t(M) {
            const { done: P, value: O } = M.next();
            return P ? void 0 : O;
          })(U);
        return q[0]
          ? [
              new e(q[0], function* () {
                for (const ge of U) ge[0] && (yield ge[0]);
              }),
              void 0,
            ]
          : [void 0, q[1]];
      }
      function y(...M) {
        const P = "type" === M[0].type,
          O = M.map((q) => q.schema),
          U = Object.assign({}, ...O);
        return P ? N(U) : ie(U);
      }
      function _(M, P) {
        return new c({ type: M, schema: null, validator: P });
      }
      function v(M, P) {
        return new c({
          ...M,
          refiner: (O, U) => void 0 === O || M.refiner(O, U),
          validator: (O, U) => void 0 === O || (P(O, U), M.validator(O, U)),
        });
      }
      function b(M) {
        return new c({
          type: "dynamic",
          schema: null,
          *entries(P, O) {
            yield* M(P, O).entries(P, O);
          },
          validator: (P, O) => M(P, O).validator(P, O),
          coercer: (P, O) => M(P, O).coercer(P, O),
          refiner: (P, O) => M(P, O).refiner(P, O),
        });
      }
      function E(M) {
        let P;
        return new c({
          type: "lazy",
          schema: null,
          *entries(O, U) {
            P ?? (P = M()), yield* P.entries(O, U);
          },
          validator: (O, U) => (P ?? (P = M()), P.validator(O, U)),
          coercer: (O, U) => (P ?? (P = M()), P.coercer(O, U)),
          refiner: (O, U) => (P ?? (P = M()), P.refiner(O, U)),
        });
      }
      function w(M, P) {
        const { schema: O } = M,
          U = { ...O };
        for (const q of P) delete U[q];
        return "type" === M.type ? N(U) : ie(U);
      }
      function S(M) {
        const P = M instanceof c,
          O = P ? { ...M.schema } : { ...M };
        for (const U in O) O[U] = ue(O[U]);
        return P && "type" === M.type ? N(O) : ie(O);
      }
      function T(M, P) {
        const { schema: O } = M,
          U = {};
        for (const q of P) U[q] = O[q];
        return "type" === M.type ? N(U) : ie(U);
      }
      function k(M, P) {
        return (
          console.warn(
            "superstruct@0.11 - The `struct` helper has been renamed to `define`."
          ),
          _(M, P)
        );
      }
      function x() {
        return _("any", () => !0);
      }
      function $(M) {
        return new c({
          type: "array",
          schema: M,
          *entries(P) {
            if (M && Array.isArray(P))
              for (const [O, U] of P.entries()) yield [O, U, M];
          },
          coercer: (P) => (Array.isArray(P) ? P.slice() : P),
          validator: (P) =>
            Array.isArray(P) ||
            `Expected an array value, but received: ${h(P)}`,
        });
      }
      function G() {
        return _("bigint", (M) => "bigint" == typeof M);
      }
      function re() {
        return _("boolean", (M) => "boolean" == typeof M);
      }
      function le() {
        return _(
          "date",
          (M) =>
            (M instanceof Date && !isNaN(M.getTime())) ||
            `Expected a valid \`Date\` object, but received: ${h(M)}`
        );
      }
      function Y(M) {
        const P = {},
          O = M.map((U) => h(U)).join();
        for (const U of M) P[U] = U;
        return new c({
          type: "enums",
          schema: P,
          validator: (U) =>
            M.includes(U) || `Expected one of \`${O}\`, but received: ${h(U)}`,
        });
      }
      function Q() {
        return _(
          "func",
          (M) =>
            "function" == typeof M ||
            `Expected a function, but received: ${h(M)}`
        );
      }
      function X(M) {
        return _(
          "instance",
          (P) =>
            P instanceof M ||
            `Expected a \`${M.name}\` instance, but received: ${h(P)}`
        );
      }
      function B() {
        return _(
          "integer",
          (M) =>
            ("number" == typeof M && !isNaN(M) && Number.isInteger(M)) ||
            `Expected an integer, but received: ${h(M)}`
        );
      }
      function z(M) {
        return new c({
          type: "intersection",
          schema: null,
          *entries(P, O) {
            for (const U of M) yield* U.entries(P, O);
          },
          *validator(P, O) {
            for (const U of M) yield* U.validator(P, O);
          },
          *refiner(P, O) {
            for (const U of M) yield* U.refiner(P, O);
          },
        });
      }
      function K(M) {
        const P = h(M),
          O = typeof M;
        return new c({
          type: "literal",
          schema:
            "string" === O || "number" === O || "boolean" === O ? M : null,
          validator: (U) =>
            U === M || `Expected the literal \`${P}\`, but received: ${h(U)}`,
        });
      }
      function H(M, P) {
        return new c({
          type: "map",
          schema: null,
          *entries(O) {
            if (M && P && O instanceof Map)
              for (const [U, q] of O.entries())
                yield [U, U, M], yield [U, q, P];
          },
          coercer: (O) => (O instanceof Map ? new Map(O) : O),
          validator: (O) =>
            O instanceof Map ||
            `Expected a \`Map\` object, but received: ${h(O)}`,
        });
      }
      function W() {
        return _("never", () => !1);
      }
      function V(M) {
        return new c({
          ...M,
          validator: (P, O) => null === P || M.validator(P, O),
          refiner: (P, O) => null === P || M.refiner(P, O),
        });
      }
      function ee() {
        return _(
          "number",
          (M) =>
            ("number" == typeof M && !isNaN(M)) ||
            `Expected a number, but received: ${h(M)}`
        );
      }
      function ie(M) {
        const P = M ? Object.keys(M) : [],
          O = W();
        return new c({
          type: "object",
          schema: M || null,
          *entries(U) {
            if (M && u(U)) {
              const q = new Set(Object.keys(U));
              for (const ae of P) q.delete(ae), yield [ae, U[ae], M[ae]];
              for (const ae of q) yield [ae, U[ae], O];
            }
          },
          validator: (U) => u(U) || `Expected an object, but received: ${h(U)}`,
          coercer: (U) => (u(U) ? { ...U } : U),
        });
      }
      function ue(M) {
        return new c({
          ...M,
          validator: (P, O) => void 0 === P || M.validator(P, O),
          refiner: (P, O) => void 0 === P || M.refiner(P, O),
        });
      }
      function ce(M, P) {
        return new c({
          type: "record",
          schema: null,
          *entries(O) {
            if (u(O))
              for (const U in O) {
                const q = O[U];
                yield [U, U, M], yield [U, q, P];
              }
          },
          validator: (O) => u(O) || `Expected an object, but received: ${h(O)}`,
        });
      }
      function de() {
        return _("regexp", (M) => M instanceof RegExp);
      }
      function j(M) {
        return new c({
          type: "set",
          schema: null,
          *entries(P) {
            if (M && P instanceof Set) for (const O of P) yield [O, O, M];
          },
          coercer: (P) => (P instanceof Set ? new Set(P) : P),
          validator: (P) =>
            P instanceof Set ||
            `Expected a \`Set\` object, but received: ${h(P)}`,
        });
      }
      function F() {
        return _(
          "string",
          (M) =>
            "string" == typeof M || `Expected a string, but received: ${h(M)}`
        );
      }
      function A(M) {
        const P = W();
        return new c({
          type: "tuple",
          schema: null,
          *entries(O) {
            if (Array.isArray(O)) {
              const U = Math.max(M.length, O.length);
              for (let q = 0; q < U; q++) yield [q, O[q], M[q] || P];
            }
          },
          validator: (O) =>
            Array.isArray(O) || `Expected an array, but received: ${h(O)}`,
        });
      }
      function N(M) {
        const P = Object.keys(M);
        return new c({
          type: "type",
          schema: M,
          *entries(O) {
            if (u(O)) for (const U of P) yield [U, O[U], M[U]];
          },
          validator: (O) => u(O) || `Expected an object, but received: ${h(O)}`,
          coercer: (O) => (u(O) ? { ...O } : O),
        });
      }
      function D(M) {
        const P = M.map((O) => O.type).join(" | ");
        return new c({
          type: "union",
          schema: null,
          coercer(O) {
            for (const U of M) {
              const [q, ae] = U.validate(O, { coerce: !0 });
              if (!q) return ae;
            }
            return O;
          },
          validator(O, U) {
            const q = [];
            for (const ae of M) {
              const [...ge] = l(O, ae, U),
                [_e] = ge;
              if (!_e[0]) return [];
              for (const [me] of ge) me && q.push(me);
            }
            return [
              `Expected the value to satisfy a union of \`${P}\`, but received: ${h(
                O
              )}`,
              ...q,
            ];
          },
        });
      }
      function C() {
        return _("unknown", () => !0);
      }
      function R(M, P, O) {
        return new c({
          ...M,
          coercer: (U, q) =>
            a(U, P) ? M.coercer(O(U, q), q) : M.coercer(U, q),
        });
      }
      function L(M, P, O = {}) {
        return R(M, C(), (U) => {
          const q = "function" == typeof P ? P() : P;
          if (void 0 === U) return q;
          if (!O.strict && f(U) && f(q)) {
            const ae = { ...U };
            let ge = !1;
            for (const _e in q)
              void 0 === ae[_e] && ((ae[_e] = q[_e]), (ge = !0));
            if (ge) return ae;
          }
          return U;
        });
      }
      function J(M) {
        return R(M, F(), (P) => P.trim());
      }
      function se(M) {
        return pe(M, "empty", (P) => {
          const O = ne(P);
          return (
            0 === O ||
            `Expected an empty ${M.type} but received one with a size of \`${O}\``
          );
        });
      }
      function ne(M) {
        return M instanceof Map || M instanceof Set ? M.size : M.length;
      }
      function te(M, P, O = {}) {
        const { exclusive: U } = O;
        return pe(M, "max", (q) =>
          U
            ? q < P
            : q <= P ||
              `Expected a ${M.type} less than ${
                U ? "" : "or equal to "
              }${P} but received \`${q}\``
        );
      }
      function he(M, P, O = {}) {
        const { exclusive: U } = O;
        return pe(M, "min", (q) =>
          U
            ? q > P
            : q >= P ||
              `Expected a ${M.type} greater than ${
                U ? "" : "or equal to "
              }${P} but received \`${q}\``
        );
      }
      function Z(M) {
        return pe(
          M,
          "nonempty",
          (P) =>
            ne(P) > 0 ||
            `Expected a nonempty ${M.type} but received an empty one`
        );
      }
      function fe(M, P) {
        return pe(
          M,
          "pattern",
          (O) =>
            P.test(O) ||
            `Expected a ${M.type} matching \`/${P.source}/\` but received "${O}"`
        );
      }
      function oe(M, P, O = P) {
        const U = `Expected a ${M.type}`,
          q = P === O ? `of \`${P}\`` : `between \`${P}\` and \`${O}\``;
        return pe(M, "size", (ae) => {
          if ("number" == typeof ae || ae instanceof Date)
            return (P <= ae && ae <= O) || `${U} ${q} but received \`${ae}\``;
          if (ae instanceof Map || ae instanceof Set) {
            const { size: ge } = ae;
            return (
              (P <= ge && ge <= O) ||
              `${U} with a size ${q} but received one with a size of \`${ge}\``
            );
          }
          {
            const { length: ge } = ae;
            return (
              (P <= ge && ge <= O) ||
              `${U} with a length ${q} but received one with a length of \`${ge}\``
            );
          }
        });
      }
      function pe(M, P, O) {
        return new c({
          ...M,
          *refiner(U, q) {
            yield* M.refiner(U, q);
            const ge = o(O(U, q), q, M, U);
            for (const _e of ge) yield { ..._e, refinement: P };
          },
        });
      }
    },
  },
]);
