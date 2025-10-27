
import React, { useState, useEffect, useRef } from 'react';
import { Tab, Tabs, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [command, setCommand] = useState('httpx -h');
  const [listFile, setListFile] = useState('');
  const [requestFile, setRequestFile] = useState('');
  const [target, setTarget] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const ws = useRef<WebSocket | null>(null);

  const [statusCode, setStatusCode] = useState(false);
  const [contentLength, setContentLength] = useState(false);
  const [contentType, setContentType] = useState(false);
  const [location, setLocation] = useState(false);
  const [favicon, setFavicon] = useState(false);
  const [hash, setHash] = useState('');
  const [jarm, setJarm] = useState(false);
  const [responseTime, setResponseTime] = useState(false);
  const [lineCount, setLineCount] = useState(false);
  const [wordCount, setWordCount] = useState(false);
  const [title, setTitle] = useState(false);
  const [bodyPreview, setBodyPreview] = useState(false);
  const [webServer, setWebServer] = useState(false);
  const [techDetect, setTechDetect] = useState(false);
  const [method, setMethod] = useState(false);
  const [websocket, setWebsocket] = useState(false);
  const [ip, setIp] = useState(false);
  const [cname, setCname] = useState(false);
  const [extractFqdn, setExtractFqdn] = useState(false);
  const [asn, setAsn] = useState(false);
  const [cdn, setCdn] = useState(false);
  const [probe, setProbe] = useState(false);
  const [matchCode, setMatchCode] = useState('');
  const [matchLength, setMatchLength] = useState('');
  const [matchLineCount, setMatchLineCount] = useState('');
  const [matchWordCount, setMatchWordCount] = useState('');
  const [matchFavicon, setMatchFavicon] = useState('');
  const [matchString, setMatchString] = useState('');
  const [matchRegex, setMatchRegex] = useState('');
  const [matchCdn, setMatchCdn] = useState('');
  const [matchResponseTime, setMatchResponseTime] = useState('');
  const [matchCondition, setMatchCondition] = useState('');
  const [filterCode, setFilterCode] = useState('');
  const [filterErrorPage, setFilterErrorPage] = useState(false);
  const [filterDuplicates, setFilterDuplicates] = useState(false);
  const [filterLength, setFilterLength] = useState('');
  const [filterLineCount, setFilterLineCount] = useState('');
  const [filterWordCount, setFilterWordCount] = useState('');
  const [filterFavicon, setFilterFavicon] = useState('');
  const [filterString, setFilterString] = useState('');
  const [filterRegex, setFilterRegex] = useState('');
  const [filterCdn, setFilterCdn] = useState('');
  const [filterResponseTime, setFilterResponseTime] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [strip, setStrip] = useState(false);
  const [threads, setThreads] = useState(50);
  const [rateLimit, setRateLimit] = useState(150);
  const [rateLimitMinute, setRateLimitMinute] = useState(0);
  const [probeAllIps, setProbeAllIps] = useState(false);
  const [ports, setPorts] = useState('');
  const [path, setPath] = useState('');
  const [tlsProbe, setTlsProbe] = useState(false);
  const [cspProbe, setCspProbe] = useState(false);
  const [tlsGrab, setTlsGrab] = useState(false);
  const [pipeline, setPipeline] = useState(false);
  const [http2, setHttp2] = useState(false);
  const [vhost, setVhost] = useState(false);
  const [listDslVariables, setListDslVariables] = useState(false);
  const [outputFile, setOutputFile] = useState('');
  const [outputAll, setOutputAll] = useState(false);
  const [storeResponse, setStoreResponse] = useState(false);
  const [storeResponseDir, setStoreResponseDir] = useState('');
  const [omitBody, setOmitBody] = useState(false);
  const [csv, setCsv] = useState(false);
  const [csvOutputEncoding, setCsvOutputEncoding] = useState('');
  const [json, setJson] = useState(false);
  const [includeResponseHeader, setIncludeResponseHeader] = useState(false);
  const [includeResponse, setIncludeResponse] = useState(false);
  const [includeResponseBase64, setIncludeResponseBase64] = useState(false);
  const [includeChain, setIncludeChain] = useState(false);
  const [storeChain, setStoreChain] = useState(false);
  const [storeVisionReconCluster, setStoreVisionReconCluster] = useState(false);
  const [protocol, setProtocol] = useState('');
  const [filterErrorPagePath, setFilterErrorPagePath] = useState('');
  const [config, setConfig] = useState('');
  const [resolvers, setResolvers] = useState('');
  const [allow, setAllow] = useState('');
  const [deny, setDeny] = useState('');
  const [sniName, setSniName] = useState('');
  const [randomAgent, setRandomAgent] = useState(false);
  const [header, setHeader] = useState('');
  const [proxy, setProxy] = useState('');
  const [unsafe, setUnsafe] = useState(false);
  const [resume, setResume] = useState(false);
  const [followRedirects, setFollowRedirects] = useState(false);
  const [maxRedirects, setMaxRedirects] = useState(10);
  const [followHostRedirects, setFollowHostRedirects] = useState(false);
  const [respectHsts, setRespectHsts] = useState(false);
  const [vhostInput, setVhostInput] = useState(false);
  const [requestMethods, setRequestMethods] = useState('');
  const [body, setBody] = useState('');
  const [stream, setStream] = useState(false);
  const [skipDedupe, setSkipDedupe] = useState(false);
  const [leaveDefaultPorts, setLeaveDefaultPorts] = useState(false);
  const [ztls, setZtls] = useState(false);
  const [noDecode, setNoDecode] = useState(false);
  const [tlsImpersonate, setTlsImpersonate] = useState(false);
  const [noStdin, setNoStdin] = useState(false);
  const [httpApiEndpoint, setHttpApiEndpoint] = useState('');
  const [healthCheck, setHealthCheck] = useState(false);
  const [debug, setDebug] = useState(false);
  const [debugReq, setDebugReq] = useState(false);
  const [debugResp, setDebugResp] = useState(false);
  const [version, setVersion] = useState(false);
  const [stats, setStats] = useState(false);
  const [profileMem, setProfileMem] = useState('');
  const [silent, setSilent] = useState(false);
  const [verbose, setVerbose] = useState(false);
  const [statsInterval, setStatsInterval] = useState(5);
  const [noColor, setNoColor] = useState(false);
  const [trace, setTrace] = useState(false);
  const [noFallback, setNoFallback] = useState(false);
  const [noFallbackScheme, setNoFallbackScheme] = useState(false);
  const [maxHostError, setMaxHostError] = useState(30);
  const [exclude, setExclude] = useState('');
  const [retries, setRetries] = useState(0);
  const [timeout, setTimeout] = useState(10);
  const [delay, setDelay] = useState('');
  const [responseSizeToSave, setResponseSizeToSave] = useState(2147483647);
  const [responseSizeToRead, setResponseSizeToRead] = useState(2147483647);
  const [auth, setAuth] = useState(false);
  const [authConfig, setAuthConfig] = useState('');
  const [dashboard, setDashboard] = useState(false);
  const [teamId, setTeamId] = useState('');
  const [assetId, setAssetId] = useState('');
  const [assetName, setAssetName] = useState('');
  const [dashboardUpload, setDashboardUpload] = useState('');

  const buildCommand = () => {
    let cmd = 'httpx';

    // Input Options
    if (listFile) cmd += ` -l ${listFile}`;
    if (requestFile) cmd += ` -rr ${requestFile}`;
    if (target) cmd += ` -u ${target}`;

    // Probe Options
    if (statusCode) cmd += ' -sc';
    if (contentLength) cmd += ' -cl';
    if (contentType) cmd += ' -ct';
    if (location) cmd += ' -location';
    if (favicon) cmd += ' -favicon';
    if (hash) cmd += ` -hash ${hash}`;
    if (jarm) cmd += ' -jarm';
    if (responseTime) cmd += ' -rt';
    if (lineCount) cmd += ' -lc';
    if (wordCount) cmd += ' -wc';
    if (title) cmd += ' -title';
    if (bodyPreview) cmd += ' -bp';
    if (webServer) cmd += ' -server';
    if (techDetect) cmd += ' -td';
    if (method) cmd += ' -method';
    if (websocket) cmd += ' -websocket';
    if (ip) cmd += ' -ip';
    if (cname) cmd += ' -cname';
    if (extractFqdn) cmd += ' -efqdn';
    if (asn) cmd += ' -asn';
    if (cdn) cmd += ' -cdn';
    if (probe) cmd += ' -probe';

    // Matcher Options
    if (matchCode) cmd += ` -mc ${matchCode}`;
    if (matchLength) cmd += ` -ml ${matchLength}`;
    if (matchLineCount) cmd += ` -mlc ${matchLineCount}`;
    if (matchWordCount) cmd += ` -mwc ${matchWordCount}`;
    if (matchFavicon) cmd += ` -mfc ${matchFavicon}`;
    if (matchString) cmd += ` -ms ${matchString}`;
    if (matchRegex) cmd += ` -mr ${matchRegex}`;
    if (matchCdn) cmd += ` -mcdn ${matchCdn}`;
    if (matchResponseTime) cmd += ` -mrt ${matchResponseTime}`;
    if (matchCondition) cmd += ` -mdc ${matchCondition}`;

    // Filter Options
    if (filterCode) cmd += ` -fc ${filterCode}`;
    if (filterErrorPage) cmd += ' -fep';
    if (filterDuplicates) cmd += ' -fd';
    if (filterLength) cmd += ` -fl ${filterLength}`;
    if (filterLineCount) cmd += ` -flc ${filterLineCount}`;
    if (filterWordCount) cmd += ` -fwc ${filterWordCount}`;
    if (filterFavicon) cmd += ` -ffc ${filterFavicon}`;
    if (filterString) cmd += ` -fs ${filterString}`;
    if (filterRegex) cmd += ` -fe ${filterRegex}`;
    if (filterCdn) cmd += ` -fcdn ${filterCdn}`;
    if (filterResponseTime) cmd += ` -frt ${filterResponseTime}`;
    if (filterCondition) cmd += ` -fdc ${filterCondition}`;
    if (strip) cmd += ' -strip';

    // Rate-Limit Options
    if (threads > 0) cmd += ` -t ${threads}`;
    if (rateLimit > 0) cmd += ` -rl ${rateLimit}`;
    if (rateLimitMinute > 0) cmd += ` -rlm ${rateLimitMinute}`;

    // Miscellaneous Options
    if (probeAllIps) cmd += ' -pa';
    if (ports) cmd += ` -p ${ports}`;
    if (path) cmd += ` -path ${path}`;
    if (tlsProbe) cmd += ' -tls-probe';
    if (cspProbe) cmd += ' -csp-probe';
    if (tlsGrab) cmd += ' -tls-grab';
    if (pipeline) cmd += ' -pipeline';
    if (http2) cmd += ' -http2';
    if (vhost) cmd += ' -vhost';
    if (listDslVariables) cmd += ' -ldv';

    // Output Options
    if (outputFile) cmd += ` -o ${outputFile}`;
    if (outputAll) cmd += ' -oa';
    if (storeResponse) cmd += ' -sr';
    if (storeResponseDir) cmd += ` -srd ${storeResponseDir}`;
    if (omitBody) cmd += ' -ob';
    if (csv) cmd += ' -csv';
    if (csvOutputEncoding) cmd += ` -csvo ${csvOutputEncoding}`;
    if (json) cmd += ' -j';
    if (includeResponseHeader) cmd += ' -irh';
    if (includeResponse) cmd += ' -irr';
    if (includeResponseBase64) cmd += ' -irrb';
    if (includeChain) cmd += ' -include-chain';
    if (storeChain) cmd += ' -store-chain';
    if (storeVisionReconCluster) cmd += ' -svrc';
    if (protocol) cmd += ` -pr ${protocol}`;
    if (filterErrorPagePath) cmd += ` -fepp ${filterErrorPagePath}`;

    // Configuration Options
    if (config) cmd += ` -config ${config}`;
    if (resolvers) cmd += ` -r ${resolvers}`;
    if (allow) cmd += ` -allow ${allow}`;
    if (deny) cmd += ` -deny ${deny}`;
    if (sniName) cmd += ` -sni ${sniName}`;
    if (randomAgent) cmd += ' -random-agent';
    if (header) cmd += ` -H ${header}`;
    if (proxy) cmd += ` -proxy ${proxy}`;
    if (unsafe) cmd += ' -unsafe';
    if (resume) cmd += ' -resume';
    if (followRedirects) cmd += ' -fr';
    if (maxRedirects > 0) cmd += ` -maxr ${maxRedirects}`;
    if (followHostRedirects) cmd += ' -fhr';
    if (respectHsts) cmd += ' -rhsts';
    if (vhostInput) cmd += ' -vhost-input';
    if (requestMethods) cmd += ` -x ${requestMethods}`;
    if (body) cmd += ` -body ${body}`;
    if (stream) cmd += ' -s';
    if (skipDedupe) cmd += ' -sd';
    if (leaveDefaultPorts) cmd += ' -ldp';
    if (ztls) cmd += ' -ztls';
    if (noDecode) cmd += ' -no-decode';
    if (tlsImpersonate) cmd += ' -tlsi';
    if (noStdin) cmd += ' -no-stdin';
    if (httpApiEndpoint) cmd += ` -hae ${httpApiEndpoint}`;

    // Debug Options
    if (healthCheck) cmd += ' -hc';
    if (debug) cmd += ' -debug';
    if (debugReq) cmd += ' -debug-req';
    if (debugResp) cmd += ' -debug-resp';
    if (version) cmd += ' -version';
    if (stats) cmd += ' -stats';
    if (profileMem) cmd += ` -profile-mem ${profileMem}`;
    if (silent) cmd += ' -silent';
    if (verbose) cmd += ' -v';
    if (statsInterval > 0) cmd += ` -si ${statsInterval}`;
    if (noColor) cmd += ' -nc';
    if (trace) cmd += ' -tr';

    // Optimization Options
    if (noFallback) cmd += ' -nf';
    if (noFallbackScheme) cmd += ' -nfs';
    if (maxHostError > 0) cmd += ` -maxhr ${maxHostError}`;
    if (exclude) cmd += ` -e ${exclude}`;
    if (retries > 0) cmd += ` -retries ${retries}`;
    if (timeout > 0) cmd += ` -timeout ${timeout}`;
    if (delay) cmd += ` -delay ${delay}`;
    if (responseSizeToSave > 0) cmd += ` -rsts ${responseSizeToSave}`;
    if (responseSizeToRead > 0) cmd += ` -rstr ${responseSizeToRead}`;

    // Cloud Options
    if (auth) cmd += ' -auth';
    if (authConfig) cmd += ` -ac ${authConfig}`;
    if (dashboard) cmd += ' -pd';
    if (teamId) cmd += ` -tid ${teamId}`;
    if (assetId) cmd += ` -aid ${assetId}`;
    if (assetName) cmd += ` -aname ${assetName}`;
    if (dashboardUpload) cmd += ` -pdu ${dashboardUpload}`;

    return cmd;
  };

  useEffect(() => {
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const runCommand = () => {
    if (isRunning) return;

    const generatedCommand = buildCommand();
    setCommand(generatedCommand);

    setOutput([]);
    setIsRunning(true);

    const socket = new WebSocket('ws://localhost:8000/ws');
    ws.current = socket;

    socket.onopen = () => {
      socket.send(command);
    };

    socket.onmessage = (event) => {
      setOutput((prevOutput) => [...prevOutput, event.data]);
      if (event.data === '--- End of command ---') {
        setIsRunning(false);
        socket.close();
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setOutput((prevOutput) => [...prevOutput, 'Error connecting to the backend.']);
      setIsRunning(false);
    };

    socket.onclose = () => {
      setIsRunning(false);
    };
  };

  const clearOutput = () => {
    setOutput([]);
  };

  return (
    <Container fluid>
      <header className="App-header">
        <h1>httpx GUI</h1>
      </header>
      <main>
        <Tabs defaultActiveKey="input" id="httpx-options-tabs">
          <Tab eventKey="input" title="Input">
            <Form.Group as={Row}>
              <Form.Label column sm="2">List File (-l)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={listFile}
                  onChange={(e) => setListFile(e.target.value)}
                  placeholder="/path/to/file.txt"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Request File (-rr)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={requestFile}
                  onChange={(e) => setRequestFile(e.target.value)}
                  placeholder="/path/to/request.txt"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Target (-u)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  placeholder="example.com,example.org"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Generated Command</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={command}
                  readOnly
                />
              </Col>
            </Form.Group>
          </Tab>
          <Tab eventKey="probes" title="Probes">
            <Form.Check
              type="checkbox"
              label="Status Code (-sc)"
              checked={statusCode}
              onChange={(e) => setStatusCode(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Content Length (-cl)"
              checked={contentLength}
              onChange={(e) => setContentLength(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Content Type (-ct)"
              checked={contentType}
              onChange={(e) => setContentType(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Location (-location)"
              checked={location}
              onChange={(e) => setLocation(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Favicon (-favicon)"
              checked={favicon}
              onChange={(e) => setFavicon(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Hash (-hash)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={hash}
                  onChange={(e) => setHash(e.target.value)}
                  placeholder="md5,mmh3,simhash,sha1,sha256,sha512"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Jarm (-jarm)"
              checked={jarm}
              onChange={(e) => setJarm(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Response Time (-rt)"
              checked={responseTime}
              onChange={(e) => setResponseTime(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Line Count (-lc)"
              checked={lineCount}
              onChange={(e) => setLineCount(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Word Count (-wc)"
              checked={wordCount}
              onChange={(e) => setWordCount(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Title (-title)"
              checked={title}
              onChange={(e) => setTitle(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Body Preview (-bp)"
              checked={bodyPreview}
              onChange={(e) => setBodyPreview(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Web Server (-server)"
              checked={webServer}
              onChange={(e) => setWebServer(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Tech Detect (-td)"
              checked={techDetect}
              onChange={(e) => setTechDetect(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Method (-method)"
              checked={method}
              onChange={(e) => setMethod(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Websocket (-websocket)"
              checked={websocket}
              onChange={(e) => setWebsocket(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="IP (-ip)"
              checked={ip}
              onChange={(e) => setIp(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="CNAME (-cname)"
              checked={cname}
              onChange={(e) => setCname(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Extract FQDN (-efqdn)"
              checked={extractFqdn}
              onChange={(e) => setExtractFqdn(e.target.checked)}
            />
            <Form.Check
              type-="checkbox"
              label="ASN (-asn)"
              checked={asn}
              onChange={(e) => setAsn(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="CDN (-cdn)"
              checked={cdn}
              onChange={(e) => setCdn(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Probe (-probe)"
              checked={probe}
              onChange={(e) => setProbe(e.target.checked)}
            />
          </Tab>
          <Tab eventKey="matchers" title="Matchers">
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match Code (-mc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchCode}
                  onChange={(e) => setMatchCode(e.target.value)}
                  placeholder="200,302"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match Length (-ml)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchLength}
                  onChange={(e) => setMatchLength(e.target.value)}
                  placeholder="100,102"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match Line Count (-mlc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchLineCount}
                  onChange={(e) => setMatchLineCount(e.target.value)}
                  placeholder="423,532"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match Word Count (-mwc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchWordCount}
                  onChange={(e) => setMatchWordCount(e.target.value)}
                  placeholder="43,55"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match Favicon (-mfc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchFavicon}
                  onChange={(e) => setMatchFavicon(e.target.value)}
                  placeholder="1494302000"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match String (-ms)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchString}
                  onChange={(e) => setMatchString(e.target.value)}
                  placeholder="admin"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match Regex (-mr)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchRegex}
                  onChange={(e) => setMatchRegex(e.target.value)}
                  placeholder="admin"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match CDN (-mcdn)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchCdn}
                  onChange={(e) => setMatchCdn(e.target.value)}
                  placeholder="cloudfront,fastly,gocache,google"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match Response Time (-mrt)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchResponseTime}
                  onChange={(e) => setMatchResponseTime(e.target.value)}
                  placeholder="< 1"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Match Condition (-mdc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={matchCondition}
                  onChange={(e) => setMatchCondition(e.target.value)}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </Tab>
          <Tab eventKey="filters" title="Filters">
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Code (-fc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterCode}
                  onChange={(e) => setFilterCode(e.target.value)}
                  placeholder="403,401"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Filter Error Page (-fep)"
              checked={filterErrorPage}
              onChange={(e) => setFilterErrorPage(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Filter Duplicates (-fd)"
              checked={filterDuplicates}
              onChange={(e) => setFilterDuplicates(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Length (-fl)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterLength}
                  onChange={(e) => setFilterLength(e.target.value)}
                  placeholder="23,33"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Line Count (-flc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterLineCount}
                  onChange={(e) => setFilterLineCount(e.target.value)}
                  placeholder="423,532"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Word Count (-fwc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterWordCount}
                  onChange={(e) => setFilterWordCount(e.target.value)}
                  placeholder="423,532"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Favicon (-ffc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterFavicon}
                  onChange={(e) => setFilterFavicon(e.target.value)}
                  placeholder="1494302000"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter String (-fs)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterString}
                  onChange={(e) => setFilterString(e.target.value)}
                  placeholder="admin"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Regex (-fe)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterRegex}
                  onChange={(e) => setFilterRegex(e.target.value)}
                  placeholder="admin"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter CDN (-fcdn)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterCdn}
                  onChange={(e) => setFilterCdn(e.target.value)}
                  placeholder="cloudfront,fastly,gocache,google"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Response Time (-frt)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterResponseTime}
                  onChange={(e) => setFilterResponseTime(e.target.value)}
                  placeholder="> 1"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Condition (-fdc)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterCondition}
                  onChange={(e) => setFilterCondition(e.target.value)}
                  placeholder=""
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Strip (-strip)"
              checked={strip}
              onChange={(e) => setStrip(e.target.checked)}
            />
          </Tab>
          <Tab eventKey="rate-limit" title="Rate-Limit">
            <Form.Group as={Row}>
              <Form.Label column sm="2">Threads (-t)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={threads}
                  onChange={(e) => setThreads(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Rate Limit (-rl)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={rateLimit}
                  onChange={(e) => setRateLimit(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Rate Limit Minute (-rlm)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={rateLimitMinute}
                  onChange={(e) => setRateLimitMinute(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
          </Tab>
          <Tab eventKey="misc" title="Miscellaneous">
            <Form.Check
              type="checkbox"
              label="Probe All IPs (-pa)"
              checked={probeAllIps}
              onChange={(e) => setProbeAllIps(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Ports (-p)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={ports}
                  onChange={(e) => setPorts(e.target.value)}
                  placeholder="http:80,https:443"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Path (-path)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={path}
                  onChange={(e) => setPath(e.target.value)}
                  placeholder="/api/v1,/api/v2"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="TLS Probe (-tls-probe)"
              checked={tlsProbe}
              onChange={(e) => setTlsProbe(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="CSP Probe (-csp-probe)"
              checked={cspProbe}
              onChange={(e) => setCspProbe(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="TLS Grab (-tls-grab)"
              checked={tlsGrab}
              onChange={(e) => setTlsGrab(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Pipeline (-pipeline)"
              checked={pipeline}
              onChange={(e) => setPipeline(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="HTTP2 (-http2)"
              checked={http2}
              onChange={(e) => setHttp2(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Vhost (-vhost)"
              checked={vhost}
              onChange={(e) => setVhost(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="List DSL Variables (-ldv)"
              checked={listDslVariables}
              onChange={(e) => setListDslVariables(e.target.checked)}
            />
          </Tab>
          <Tab eventKey="output" title="Output">
            <Form.Group as={Row}>
              <Form.Label column sm="2">Output File (-o)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={outputFile}
                  onChange={(e) => setOutputFile(e.target.value)}
                  placeholder="output.txt"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Output All (-oa)"
              checked={outputAll}
              onChange={(e) => setOutputAll(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Store Response (-sr)"
              checked={storeResponse}
              onChange={(e) => setStoreResponse(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Store Response Dir (-srd)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={storeResponseDir}
                  onChange={(e) => setStoreResponseDir(e.target.value)}
                  placeholder="/path/to/dir"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Omit Body (-ob)"
              checked={omitBody}
              onChange={(e) => setOmitBody(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="CSV (-csv)"
              checked={csv}
              onChange={(e) => setCsv(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">CSV Output Encoding (-csvo)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={csvOutputEncoding}
                  onChange={(e) => setCsvOutputEncoding(e.target.value)}
                  placeholder="utf-8"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="JSON (-j)"
              checked={json}
              onChange={(e) => setJson(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Include Response Header (-irh)"
              checked={includeResponseHeader}
              onChange={(e) => setIncludeResponseHeader(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Include Response (-irr)"
              checked={includeResponse}
              onChange={(e) => setIncludeResponse(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Include Response Base64 (-irrb)"
              checked={includeResponseBase64}
              onChange={(e) => setIncludeResponseBase64(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Include Chain (-include-chain)"
              checked={includeChain}
              onChange={(e) => setIncludeChain(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Store Chain (-store-chain)"
              checked={storeChain}
              onChange={(e) => setStoreChain(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Store Vision Recon Cluster (-svrc)"
              checked={storeVisionReconCluster}
              onChange={(e) => setStoreVisionReconCluster(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Protocol (-pr)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={protocol}
                  onChange={(e) => setProtocol(e.target.value)}
                  placeholder="http11"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Filter Error Page Path (-fepp)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={filterErrorPagePath}
                  onChange={(e) => setFilterErrorPagePath(e.target.value)}
                  placeholder="filtered_error_page.json"
                />
              </Col>
            </Form.Group>
            <div className="output-container">
              <pre>
                {output.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </pre>
            </div>
          </Tab>
          <Tab eventKey="configs" title="Configurations">
            <Form.Group as={Row}>
              <Form.Label column sm="2">Config (-config)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={config}
                  onChange={(e) => setConfig(e.target.value)}
                  placeholder="/path/to/config.yaml"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Resolvers (-r)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={resolvers}
                  onChange={(e) => setResolvers(e.target.value)}
                  placeholder="8.8.8.8,1.1.1.1"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Allow (-allow)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={allow}
                  onChange={(e) => setAllow(e.target.value)}
                  placeholder="192.168.1.0/24"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Deny (-deny)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={deny}
                  onChange={(e) => setDeny(e.target.value)}
                  placeholder="10.0.0.0/8"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">SNI Name (-sni-name)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={sniName}
                  onChange={(e) => setSniName(e.target.value)}
                  placeholder="example.com"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Random Agent (-random-agent)"
              checked={randomAgent}
              onChange={(e) => setRandomAgent(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Header (-H)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={header}
                  onChange={(e) => setHeader(e.target.value)}
                  placeholder="Cookie: ..."
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Proxy (-proxy)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={proxy}
                  onChange={(e) => setProxy(e.target.value)}
                  placeholder="http://127.0.0.1:8080"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Unsafe (-unsafe)"
              checked={unsafe}
              onChange={(e) => setUnsafe(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Resume (-resume)"
              checked={resume}
              onChange={(e) => setResume(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Follow Redirects (-fr)"
              checked={followRedirects}
              onChange={(e) => setFollowRedirects(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Max Redirects (-maxr)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={maxRedirects}
                  onChange={(e) => setMaxRedirects(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Follow Host Redirects (-fhr)"
              checked={followHostRedirects}
              onChange={(e) => setFollowHostRedirects(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Respect HSTS (-rhsts)"
              checked={respectHsts}
              onChange={(e) => setRespectHsts(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Vhost Input (-vhost-input)"
              checked={vhostInput}
              onChange={(e) => setVhostInput(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Request Methods (-x)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={requestMethods}
                  onChange={(e) => setRequestMethods(e.target.value)}
                  placeholder="GET,POST,HEAD"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Body (-body)</Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Request body"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Stream (-s)"
              checked={stream}
              onChange={(e) => setStream(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Skip Dedupe (-sd)"
              checked={skipDedupe}
              onChange={(e) => setSkipDedupe(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Leave Default Ports (-ldp)"
              checked={leaveDefaultPorts}
              onChange={(e) => setLeaveDefaultPorts(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="ZTLS (-ztls)"
              checked={ztls}
              onChange={(e) => setZtls(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="No Decode (-no-decode)"
              checked={noDecode}
              onChange={(e) => setNoDecode(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="TLS Impersonate (-tlsi)"
              checked={tlsImpersonate}
              onChange={(e) => setTlsImpersonate(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="No Stdin (-no-stdin)"
              checked={noStdin}
              onChange={(e) => setNoStdin(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">HTTP API Endpoint (-hae)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={httpApiEndpoint}
                  onChange={(e) => setHttpApiEndpoint(e.target.value)}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </Tab>
          <Tab eventKey="debug" title="Debug">
            <Form.Check
              type="checkbox"
              label="Health Check (-hc)"
              checked={healthCheck}
              onChange={(e) => setHealthCheck(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Debug (-debug)"
              checked={debug}
              onChange={(e) => setDebug(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Debug Request (-debug-req)"
              checked={debugReq}
              onChange={(e) => setDebugReq(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Debug Response (-debug-resp)"
              checked={debugResp}
              onChange={(e) => setDebugResp(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Version (-version)"
              checked={version}
              onChange={(e) => setVersion(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Stats (-stats)"
              checked={stats}
              onChange={(e) => setStats(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Profile Memory (-profile-mem)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={profileMem}
                  onChange={(e) => setProfileMem(e.target.value)}
                  placeholder="/path/to/mem.prof"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Silent (-silent)"
              checked={silent}
              onChange={(e) => setSilent(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Verbose (-v)"
              checked={verbose}
              onChange={(e) => setVerbose(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Stats Interval (-si)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={statsInterval}
                  onChange={(e) => setStatsInterval(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="No Color (-nc)"
              checked={noColor}
              onChange={(e) => setNoColor(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Trace (-tr)"
              checked={trace}
              onChange={(e) => setTrace(e.target.checked)}
            />
          </Tab>
          <Tab eventKey="optimizations" title="Optimizations">
            <Form.Check
              type="checkbox"
              label="No Fallback (-nf)"
              checked={noFallback}
              onChange={(e) => setNoFallback(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="No Fallback Scheme (-nfs)"
              checked={noFallbackScheme}
              onChange={(e) => setNoFallbackScheme(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Max Host Error (-maxhr)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={maxHostError}
                  onChange={(e) => setMaxHostError(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Exclude (-e)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={exclude}
                  onChange={(e) => setExclude(e.target.value)}
                  placeholder="cdn,private-ips"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Retries (-retries)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={retries}
                  onChange={(e) => setRetries(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Timeout (-timeout)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={timeout}
                  onChange={(e) => setTimeout(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Delay (-delay)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={delay}
                  onChange={(e) => setDelay(e.target.value)}
                  placeholder="200ms, 1s"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Response Size To Save (-rsts)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={responseSizeToSave}
                  onChange={(e) => setResponseSizeToSave(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Response Size To Read (-rstr)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  value={responseSizeToRead}
                  onChange={(e) => setResponseSizeToRead(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
          </Tab>
          <Tab eventKey="cloud" title="Cloud">
            <Form.Check
              type="checkbox"
              label="Auth (-auth)"
              checked={auth}
              onChange={(e) => setAuth(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Auth Config (-ac)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={authConfig}
                  onChange={(e) => setAuthConfig(e.target.value)}
                  placeholder="/path/to/config.yaml"
                />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Dashboard (-pd)"
              checked={dashboard}
              onChange={(e) => setDashboard(e.target.checked)}
            />
            <Form.Group as={Row}>
              <Form.Label column sm="2">Team ID (-tid)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                  placeholder="team-id"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Asset ID (-aid)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={assetId}
                  onChange={(e) => setAssetId(e.target.value)}
                  placeholder="asset-id"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Asset Name (-aname)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={assetName}
                  onChange={(e) => setAssetName(e.target.value)}
                  placeholder="asset-name"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">Dashboard Upload (-pdu)</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={dashboardUpload}
                  onChange={(e) => setDashboardUpload(e.target.value)}
                  placeholder="/path/to/output.jsonl"
                />
              </Col>
            </Form.Group>
          </Tab>
        </Tabs>
        <Button onClick={runCommand} disabled={isRunning} className="mt-3">
          {isRunning ? 'Running...' : 'Run'}
        </Button>
        <Button onClick={clearOutput} disabled={isRunning} className="mt-3 ml-2">
          Clear
        </Button>
      </main>
    </Container>
  );
}

export default App;
