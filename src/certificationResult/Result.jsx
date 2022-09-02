import React, { useState, useEffect } from 'react';
// import WebView from 'react-native-webview';
import queryString from 'query-string';

const domain = 'http://localhost:3000'; // 가맹점 도메인
function Result({ navigation }) {
  const [uri, setUri] = useState(domain);

  useEffect(() => {
    /* navigation이 바뀌었을때를 트리거 */
    const response = navigation.getParam('response');
    if (response) {
      const query = queryString.stringify(response);
      const { type } = query;
      if (type === 'certification') {
        /* 본인인증 후 렌더링 되었을 경우, https://example.com/certification/result로 리디렉션 시킨다 */
        setUri(`${domain}/certification/result?${query}`);    
      }

    }
  }, [navigation]);

  function onMessage(e) {
    try {
      const { userCode, data, type } = JSON.parse(e.nativeEvent.data);
      const params = { userCode, data };
      navigation.push(type === 'payment' ? 'Payment' : 'Certification', params);
    } catch (e) {}
  }

  return (
    <div
      source={{ uri }} 
      onMessage={onMessage}
      style={{ flex: 1 }}
      injectedJavascript={`(function() {
        window.postMessage = function(data) {
          window.ReactNativeWebView.postMessage(data);
        };
      })()`}
    />
  );
}

export default Result;