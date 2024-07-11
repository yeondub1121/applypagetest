import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TabMenu = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  border-bottom: ${props => (props.active ? '2px solid green' : 'none')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
`;

const AdCalendar = styled.div`
  margin-bottom: 20px;
`;

const CalendarPlaceholder = styled.div`
  background-color: #f0f0f0;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: gray;
`;

const AdStatus = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatusButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  margin-right: 5px;
`;

const AdList = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  display: ${props => (props.active ? 'block' : 'none')};
`;

const AdItem = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const AdDate = styled.div`
  width: 100px;
  font-weight: bold;
`;

const AdDetails = styled.div`
  flex: 1;
`;

const Label = styled.span`
  background-color: #ddd;
  padding: 2px 5px;
  border-radius: 3px;
  margin-right: 5px;
  font-size: 12px;
`;

export default function Apply() {
  const [activeTab, setActiveTab] = useState('schedule'); // 'schedule' or 'status'

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <Title>지원관리</Title>
      <TabMenu>
        <TabButton active={activeTab === 'schedule'} onClick={() => handleTabClick('schedule')}>
          지원일정
        </TabButton>
        <TabButton active={activeTab === 'status'} onClick={() => handleTabClick('status')}>
          지원현황
        </TabButton>
      </TabMenu>
      {activeTab === 'schedule' && (
        <>
         <AdStatus active={activeTab === 'schedule'}>
            <StatusButton>기다리는 공고 </StatusButton>
            <StatusButton>지원한 공고 </StatusButton>
          </AdStatus>
          <AdCalendar>
            <CalendarPlaceholder>달력</CalendarPlaceholder>
          </AdCalendar>
         
        </>
      )}
      <AdList active={activeTab === 'status'}>
        
       
      </AdList>
    </Container>
  );
}


